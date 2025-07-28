import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import CardAnimation from "./PopupAnimation";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (cardData) => {
    setShowPopup(!showPopup);
    setSelectedCard(cardData);
    console.log(cardData);
  };

  const projects = [
    {
      id: "Lida",
      image: "lidaMockup.png",
      title: "Lida",
      subtitle: "Mobile Application for Composting Prototype",
      handle: "@Flutter @AWS",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/",
      description: `In this project, I collaborated with a sustainability-focused startup to build LIDA, a mobile application that controls a composting system remotely using real-time IoT data. The goal was to automate and optimize organic waste decomposition by dynamically adjusting environmental parameters inside the composting unit. I developed the frontend using Flutter and integrated it with AWS IoT Core, allowing real-time bidirectional communication between the app and the composting hardware. The system intelligently adjusts carbon-to-nitrogen ratios, moisture levels, and other composting conditions based on real-time data, drastically reducing the composting period from the traditional 180 days to just 60. Through this, I gained valuable experience in IoT architecture, asynchronous data handling, and mobile-cloud communication pipelines.`,
      features: [
        "Real-time environment monitoring using IoT and MQTT.",
        "Automated compost tuning via sensor-driven logic.",
        "Cloud automation with Lambda and CloudWatch.",
      ],
    },
    {
      id: "foodify",
      image: "FoodifyMockup.jpeg",
      title: "Foodify",
      subtitle: "Mobile and Web App for Surplus Food Management",
      handle: "@Vue @firebase",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://linkedin.com/in/",
      description: `For this project, I developed Foodify, a Kotlin-based Android application that connects food donors (restaurants, households) with individuals or charities in need. I designed and implemented secure user authentication using Firebase Auth, managed data with Firebase Firestore, and integrated Google Maps API to visually display food donation points. By enhancing data handling and incorporating a visually intuitive map-based interface, the app encourages timely and efficient food redistribution, directly benefiting vulnerable populations while reducing landfill waste. This app taught me how to balance intuitive UI/UX design with robust backend integrations and helped me deepen my knowledge of mobile app security, real-time databases, and API-driven development.`,
      features: [
        "Firebase Auth & Firestore for secure data handling.",
        "Google Maps integration for live donation location.",
        "Optimized database access for better performance.",
      ],
    },
    {
      id: "securepark",
      image: "SecureParkMockup.png",
      title: "Secure-Park",
      subtitle: "Smart Parking System",
      handle: "@Arduino @RaspberryPI",
      borderColor: "rgb(245, 245, 11)",
      gradient: "linear-gradient(165deg,rgb(245, 245, 11), #000)",
      url: "https://dribbble.com/",
      description: `In SecurePark, I developed a smart web-based parking assistant system that uses IoT sensors to detect real-time parking availability and improve safety through environmental monitoring. I programmed Arduino microcontrollers to detect vehicle presence and integrated these with a backend built in Python and MySQL. Additionally, SecurePark includes a safety layer by incorporating smoke detectors into the system. These detectors alert authorities in real time upon detecting harmful emissions, increasing the security and utility of parking spaces in urban areas. The system communicated through the MQTT protocol, ensuring lightweight and fast message delivery between devices and the server. This project refined my skills in hardware-software integration, data security protocols, and sensor-based automation.`,
      features: [
        "Sensors detect real-time data.",
        "MQTT protocol for fast and secure messaging.",
        "Web-page application for simple user interaction.",
      ],
    },
    {
      image: "Covi-runMockup.jpg",
      title: "Covi Run",
      subtitle: "Data Scientist",
      handle: "@Ruby",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://kaggle.com/",
      description: `CoviRun is a 2D educational game developed in Ruby using the Gosu library, aimed at promoting COVID-19 safety awareness among children. Inspired by the observed rise in cases among young students post school reopenings, the game uses engaging gameplay to teach hygiene practices and preventive measures in a fun, interactive way. This project helped me explore game development concepts, sprite animation, collision detection, and player interaction while reinforcing public health messaging through digital media.`,
      features: [
        "Built with Ruby and Gosu, featuring interactive 2D graphics.",
        "Game mechanics designed to teach COVID-19 safety habits.",
        "Implemented player movement, scoring, and virus avoidance logic.",
      ],
    },
    {
      image: "musicPlayerMockup.jpg",
      title: "Music Player",
      subtitle: "Desktop App Using Ruby",
      handle: "@Ruby @Gosu",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/",
      id: "musicplayer",
      description: `Developed a desktop music player in Ruby using the Gosu library, delivering a visually engaging and interactive music experience. The application features a custom UI that displays album artwork and provides responsive playback controls. I utilized Ruby’s object-oriented capabilities to manage album and track data, and implemented Gosu's event-driven system to handle user interactions smoothly. This project demonstrated my proficiency in Ruby, UI rendering, and third-party library integration.`,
      features: [
        "Gosu-powered UI with custom graphics and album art display.",
        "Structured album and track management using Ruby classes.",
        "Responsive controls via Gosu’s event-handling system.",
      ],
    },
    {
      image: "JobApplicationMockup.jpg",
      title: "Application Portal",
      subtitle: "Cloud Architect",
      handle: "@Php @MariaDB",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://aws.amazon.com/",
      description: `Developed a dynamic job application portal as part of a school project using PHP, HTML/CSS, and MySQL. The platform allows users to submit job applications which are securely stored in a relational database. Managers can log in using email and password credentials to view, manage, and respond to incoming applications. This project strengthened my backend web development skills, user session handling, and database integration using SQL.`,
      features: [
        "Built with PHP and MySQL to handle application submission and storage.",
        "Manager login system with session-based authentication.",
        "Admin interface to view and manage submitted applications.",
      ],
    },
    {
      image: "InvestmentMockup.jpg",
      title: "AWS Portfolios",
      subtitle: "Cloud Architect",
      handle: "@Php @MySQL",
      borderColor: "rgb(255, 149, 0)",
      gradient: "linear-gradient(135deg,rgb(255, 149, 0), #000)",
      url: "https://aws.amazon.com/",
      description: `Worked in a team to design and develop an investment tracking platform for a mock client firm, enabling the storage and management of customer investment data. Built with PHP for the frontend and MySQL for data persistence, the platform was developed as part of a Spring Practice project simulating real-world software engineering. Our team followed a full SDLC approach—drafting a project proposal, setting milestones, using Jira for agile task tracking, and applying formal testing and quality management processes throughout development.`,
      features: [
        "Developed using PHP (frontend) and MySQL (database).",
        "Client-focused dashboard to add, view, and manage customer investments.",
        "Managed via Jira with sprint planning, testing, and quality assurance.",
      ],
    },
    // {
    //   image: "JobApplicationMockup.jpg",
    //   title: "Tyler Rodriguez",
    //   subtitle: "Cloud Architect",
    //   handle: "@tylerrod",
    //   borderColor: "rgb(212, 6, 202)",
    //   gradient: "linear-gradient(135deg,rgb(212, 6, 202), #000)",
    //   url: "https://aws.amazon.com/",
    // },
    {
      image: "CodeSandBox.png",
      title: "CodeSandbox",
      subtitle: "My Playground",
      handle: "@React",
      borderColor: "rgb(6, 212, 154)",
      gradient: "linear-gradient(135deg,rgb(6, 212, 154), #000)",
      url: "https://codesandbox.io/u/ZeusCodes",
      description: `CodeSandbox serves as my personal development sandbox for experimenting with new React concepts, UI components, and advanced frontend techniques. It’s a flexible environment where I prototype interactive features, test component behavior, and refine performance optimization strategies. Through this ongoing hands-on exploration, I continuously enhance my skills in React, hooks, animations, and third-party libraries like Framer Motion, Tailwind CSS, and Zustand.`,
      features: [
        "Prototyping advanced React components and patterns.",
        "Experimenting with UI/UX tools like Framer Motion and Tailwind CSS.",
        "Testing state management techniques.",
      ],
    },
  ];
  const data = items?.length ? items : projects;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div>
      <CardAnimation
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        data={selectedCard}
      />
      <div
        ref={rootRef}
        className={`chroma-grid ${className}`}
        style={{
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        }}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {data.map((c, i) => (
          <article
            key={i}
            className="chroma-card"
            onMouseMove={handleCardMove}
            onClick={() => handleOpen(c)}
            style={{
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url ? "pointer" : "default",
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
        <div className="chroma-overlay" />
        <div ref={fadeRef} className="chroma-fade" />
      </div>
    </div>
  );
};

export default ChromaGrid;
