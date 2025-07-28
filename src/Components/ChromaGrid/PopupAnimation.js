import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PopupAnimation.css";
import Stack from "../Stack/Stack";
import SettingsIcon from "@mui/icons-material/Settings";

const images = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
  },
];

export default function CardAnimation({ isVisible, setIsVisible, data }) {
  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, setIsVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.75 },
          }}
          className="popup-container"
          key="popup"
        >
          <div ref={boxRef} className="box">
            <div className="wide-card">
              <div className="card-left">
                <h1 className="card-heading">{data.title}</h1>
                <div className="features">
                  {data.features.map((c, i) => (
                    <div className="feature">
                      <SettingsIcon
                        fontSize="small"
                        className="icon"
                      ></SettingsIcon>
                      {c}
                    </div>
                  ))}
                </div>
                <p className="description">{data.description}</p>
              </div>
              <div className="card-right">
                <Stack
                  randomRotation={false}
                  sensitivity={200}
                  sendToBackOnClick={true}
                  cardDimensions={{ width: 350, height: 500 }}
                  cardsData={images}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
