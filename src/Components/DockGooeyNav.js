"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./GooeyNav.css";
import "./Dock.css";

function createParticleEffect(container, config) {
  const {
    particleCount,
    particleDistances,
    particleR,
    animationTime,
    timeVariance,
    colors,
  } = config;

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const d = particleDistances;
  const r = particleR;
  const bubbleTime = animationTime * 2 + timeVariance;
  container.style.setProperty("--time", `${bubbleTime}ms`);

  for (let i = 0; i < particleCount; i++) {
    const t = animationTime * 2 + noise(timeVariance * 2);
    const p = createParticle(i, t, d, r);
    container.classList.remove("active");

    setTimeout(() => {
      const particle = document.createElement("span");
      const point = document.createElement("span");
      particle.classList.add("particle");
      particle.style.setProperty("--start-x", `${p.start[0]}px`);
      particle.style.setProperty("--start-y", `${p.start[1]}px`);
      particle.style.setProperty("--end-x", `${p.end[0]}px`);
      particle.style.setProperty("--end-y", `${p.end[1]}px`);
      particle.style.setProperty("--time", `${p.time}ms`);
      particle.style.setProperty("--scale", `${p.scale}`);
      particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
      particle.style.setProperty("--rotate", `${p.rotate}deg`);
      point.classList.add("point");
      particle.appendChild(point);
      container.appendChild(particle);
      requestAnimationFrame(() => container.classList.add("active"));
      setTimeout(() => {
        try {
          container.removeChild(particle);
        } catch {}
      }, t);
    }, 30);
  }
}

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const ref = useRef(null);
  const iconRef = useRef(null);
  const effectRef = useRef(null);
  const isHovered = useMotionValue(0);
  const isActive = index === activeIndex;

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const handleClick = (e) => {
    setActiveIndex(index); // set active index
    if (onClick) onClick(e);

    const iconRect = iconRef.current.getBoundingClientRect();
    const containerRect = ref.current.getBoundingClientRect();
    const localX = iconRect.left - containerRect.left;
    const localY = iconRef.top - containerRect.top;

    Object.assign(effectRef.current.style, {
      left: `${localX}px`,
      top: `${localY}px`,
      width: `${iconRect.width}px`,
      height: `${iconRect.height}px`,
      display: "block",
    });

    effectRef.current.innerHTML = "";
    createParticleEffect(effectRef.current, {
      particleCount: 24,
      particleDistances: [200, 23],
      particleR: 100,
      animationTime: 700,
      timeVariance: 250,
      colors: [1, 2, 3, 4],
    });

    setTimeout(() => {
      if (effectRef.current) {
        effectRef.current.innerHTML = "";
        effectRef.current.style.display = "none";
      }
    }, 750);
  };

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={handleClick}
      className={`dock-item ${className} ${isActive ? "active" : ""}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      <div
        className={`dock-icon ${isActive ? "icon-active" : "icon-inactive"}`}
        ref={iconRef}
      >
        {Children.map(children, (child) => cloneElement(child, { isHovered }))}
        <span className="effect filter" ref={effectRef} />
      </div>
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  onPageClick,
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const effectContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // NEW

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onClick={() => onPageClick(index + 1)}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            effectContainerRef={effectContainerRef}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
        <span className="effect filter" ref={effectContainerRef} />
      </motion.div>
    </motion.div>
  );
}
