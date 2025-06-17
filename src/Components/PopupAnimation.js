// CardAnimation.jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import "./PopupAnimation.css";

export default function CardAnimation({ isVisible, data }) {
  return (
    <div className="container">
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
            className="box"
            key="popup"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
