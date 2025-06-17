import React, { useEffect, useState, useRef } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AudioPlayer = () => {
  const [volume, setVolume] = useState(50);
  const currentVolumeRef = useRef(50);
  const targetVolumeRef = useRef(50);
  const animationRef = useRef(null);
  const volumeRef = useRef(null);

  const animate = () => {
    const current = currentVolumeRef.current;
    const target = targetVolumeRef.current;

    const diff = target - current;
    const distance = Math.abs(diff);
    const direction = Math.sign(diff);

    if (distance < 0.5) {
      currentVolumeRef.current = target;
      setVolume(Math.round(target));
      animationRef.current = null;
      return;
    }

    // Non-linear interpolation: progress = 1 - (distance / max)
    const t = Math.min(1, 1 - distance / 100); // progress toward target
    const easedStep = easeOutCubic(t) * 5 + 0.5; // range: ~0.5 - 5.5

    currentVolumeRef.current += easedStep * direction;
    setVolume(Math.round(currentVolumeRef.current));

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (event) => {
    const box = volumeRef.current;
    if (box) {
      const { left, width } = box.getBoundingClientRect();
      const mouseX = event.clientX - left;
      const centerX = width / 2;
      const offsetFromCenter = centerX - mouseX;

      let newVolume = 50 + (offsetFromCenter / centerX) * 50;
      newVolume = Math.max(0, Math.min(100, newVolume));

      targetVolumeRef.current = newVolume;

      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="player"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        fontFamily: "'Raleway', sans-serif",
        overflow: "hidden",
      }}
    >
      <Box
        id="volume"
        ref={volumeRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          targetVolumeRef.current = currentVolumeRef.current;
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "15%",
          height: "80vh",
          width: "70vw",
          backgroundColor: "#455",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          //   paddingX: 2,
        }}
      >
        <Slider
          value={volume}
          min={0}
          max={100}
          sx={{
            height: "100%",
            width: "100%",
            padding: 0,
            color: "black", // disables default blue color
            "& .MuiSlider-thumb": {
              display: "none",
            },
            "& .MuiSlider-track": {
              height: "100%",
              backgroundImage: 'url("/image3.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "none",
              borderRadius: "10px",
              //   backgroundColor: "transparent",
            },
            "& .MuiSlider-rail": {
              height: "100%",
              backgroundImage: 'url("/image4.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "none",
              borderRadius: "10px",
              opacity: 100,
              //   backgroundColor: "transparent",
            },
            "& .MuiSlider-colorPrimary": {
              backgroundColor: "transparent",
            },
            "& .Mui-focusVisible": {
              outline: "none",
            },
            "& .MuiSlider-root": {
              color: "transparent",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AudioPlayer;
