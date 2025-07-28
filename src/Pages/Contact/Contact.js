import Particles from "../../Components/Particles/Particles";
import "./Contact.css";
import Hyperspeed from "../../Components/Hyperspeed/Hyperspeed";
import Button from "../../Components/StarBorder/StarBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  return (
    <div className="Contact">
      <div
        style={{
          width: "100%",
          height: "600px",
          top: "70px",
          position: "fixed",
          zIndex: -2,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="contact-me">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="title">
              contact<span className="dot">.</span>
            </h1>
            <p className="subtitle">
              Get in touch with me via social media <br />
              or send me an email.
            </p>

            <div className="social-icons">
              <a
                href="https://github.com/ZeusCodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> Github
              </a>
              <a
                href="https://www.linkedin.com/in/pallab-paul-0211/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-right">
            <img
              src="image.png"
              alt="Half Face Art"
              className="half-face-img"
            />
          </div>
        </div>
      </div>
      <div>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
        <div className="form-container">
          <h1>Send me an email</h1>
          <form className="form-grid float-container">
            <div className="float-child">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="float-child">
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message"></textarea>
              </div>
            </div>

            <div className="form-group full-width button-container">
              <Button
                as="button"
                color="cyan"
                speed="5s"
                id="contact-submit"
                type="submit"
              >
                Send email
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
