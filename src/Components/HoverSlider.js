import { useEffect, useRef, useState } from "react";
import "./ImageSliderEffect.css"; // Style accordingly

const SmoothImageSlider = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const [designerStyle, setDesignerStyle] = useState({
    width: "50%",
    opacity: 1,
  });
  const [coderStyle, setCoderStyle] = useState({
    width: "50%",
    opacity: 1,
  });

  const targetRef = useRef({
    designer: { w: 50, o: 1 },
    coder: { w: 50, o: 1 },
  });
  const currentRef = useRef({
    designer: { w: 50, o: 1 },
    coder: { w: 50, o: 1 },
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  const update = () => {
    const t = 0.1; // Adjust for smoothness
    const c = currentRef.current;
    const target = targetRef.current;

    c.designer.w = lerp(c.designer.w, target.designer.w, t);
    c.designer.o = lerp(c.designer.o, target.designer.o, t);
    c.coder.w = lerp(c.coder.w, target.coder.w, t);
    c.coder.o = lerp(c.coder.o, target.coder.o, t);

    setDesignerStyle({
      width: `${c.designer.w}%`,
      opacity: c.designer.o,
    });

    setCoderStyle({
      width: `${c.coder.w}%`,
      opacity: c.coder.o,
    });

    animationRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = e.clientX;
      const distanceFromCenter = mouseX - centerX;
      const ratio = Math.min(
        Math.max((distanceFromCenter / rect.width) * 2, -1),
        1
      );

      const designerOpacity = ratio >= 1 ? 0 : 1 - Math.max(0, ratio);
      const coderOpacity = ratio <= -1 ? 0 : 1 - Math.max(0, -ratio);
      const designerWidth = ratio >= 1 ? 0 : 50 + -ratio * 50;
      const coderWidth = ratio <= -1 ? 0 : 50 + ratio * 50;

      targetRef.current = {
        designer: { w: designerWidth, o: designerOpacity },
        coder: { w: coderWidth, o: coderOpacity },
      };
    };

    const handleMouseLeave = () => {
      targetRef.current = {
        designer: { w: 50, o: 1 },
        coder: { w: 50, o: 1 },
      };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    animationRef.current = requestAnimationFrame(update);

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // handleMouseLeave={handleMouseLeave}
      className="slider-container"
    >
      <div
        id="designer-img"
        className="designer-img"
        style={{
          left: 0,
          ...designerStyle,
        }}
      />
      <div
        id="designer-img"
        className="designer-img"
        style={{
          left: 0,
          ...designerStyle,
        }}
      />
      <div
        id="coder-img"
        className="coder-img"
        style={{
          right: 0,
          ...coderStyle,
        }}
      />
    </div>
  );
};

export default SmoothImageSlider;
