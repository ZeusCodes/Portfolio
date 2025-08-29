import Particles from "../../Components/Particles/Particles";
import "./Resume.css";
import RollingGallery from "../../Components/RollingGallery/RollingGallery";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import CardSwapperTopElem from "../../Components/CardSwapper/CardSwapperTop";
import CardSwapperBottomElem from "../../Components/CardSwapper/CardSwapperBottom";
import Timeline from "../../Components/Timeline/Timeline";
import Button from "../../Components/StarBorder/StarBorder";
export default function Resume() {
  return (
    <div className="Resume">
      <div
        style={{
          width: "100%",
          height: "600px",
          top: "70px",
          position: "fixed",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <section id="about">
        <h1 className="heading">Meet the Maker.</h1>
        <div class="float-container">
          <div class="float-child">
            <ProfileCard
              name="Pallab Paul"
              title="Software Engineer"
              handle="iampallabpaul"
              status="Online"
              contactText="Contact Me"
              iconUrl="iconpattern.png"
              grainUrl="grain.webp"
              avatarUrl="MyImage.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() =>
                window.open(
                  (window.location.href = "mailto:pallabpaul0211@gmail.com")
                )
              }
            />
          </div>
          <div class="float-child">
            <div className="about-me-content">
              <h3>👋 Hi, I'm Pallab Paul</h3>
              <h5>
                Software Developer | Digital Architect | Finance Enthusiast
              </h5>{" "}
              I'm a Melbourne-based software developer with a strong foundation
              in computer science and a keen interest in finance. With a passion
              for building meaningful, user-centric digital products, I bring
              together technical expertise and design thinking to deliver
              robust, scalable, and impactful solutions. From mobile development
              with Kotlin to full-stack web applications using React, Node.js,
              and C#, I thrive on turning ideas into reality through clean code
              and thoughtful architecture. I’ve worked across diverse
              projects—from integrating Google Maps APIs to building interactive
              UI/UX features with Framer Motion—always aiming to push creative
              and technical boundaries. I value working in collaborative
              environments where learning is continuous, and challenges drive
              innovation. I'm currently seeking opportunities where I can
              contribute to forward-thinking teams, deepen my engineering
              skills, and grow into a leadership role in technology. Let’s build
              the future, one line of code at a time.
            </div>
            <Button
              className="resumeBTN"
              variant="outlined"
              color="cyan"
              onClick={() =>
                window.open("/Pallab_Paul_Developer.pdf", "_blank")
              }
            >
              Resume
            </Button>
            <Button className="resumeBTN" variant="outlined" color="cyan">
              Video Resume
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h1 className="heading">Work xperience.</h1>
        <div className="">
          <Timeline></Timeline>
        </div>
      </section>

      <section id="education">
        <h1 className="heading">Education.</h1>
        <div className="float-container education">
          <div class="float-child">
            <img src="swinburne.png" alt="Swinburne Logo"></img>
          </div>
          <div class="float-child">
            <div class="edu-degree">Bachelor of Computer Science</div>
            <div class="edu-uni">Swinburne University of Technology</div>
            <div class="edu-grade">GPA: 3.56/4</div>
            <ul>
              <li>Major in Software Development</li>
              <li>Minor in Finance</li>
              <li>
                Modules: Object-Oriented Programming, Data Structures, Mobile
                Development, Cloud Computing, Artificial Intelligence, Internet
                of Things, IT Project Management, User-Centric Designs, and
                Database Management
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h1 className="heading">Life Outside the Keyboard.</h1>
        <div className="interests">
          <CardSwapperTopElem></CardSwapperTopElem>
          <CardSwapperBottomElem></CardSwapperBottomElem>
        </div>
      </section>

      <section>
        <h1 className="heading">My Travel Photobook.</h1>
        <div className="interests">
          <RollingGallery></RollingGallery>
        </div>
      </section>
    </div>
  );
}
