import Particles from "./Particles";
import Button from "@mui/material/Button";
import "./Resume.css";
// import CardSwap, { Card } from "./CardSwap";
import RollingGallery from "./RollingGallery";
import ProfileCard from "./ProfileCard";
import CardSwapper from "./CardSwapperElem";
import CardSwap, { Card } from "./try";
import ChromaGrid from "./ChromaGrid";
import Timeline from "./Timeline";
// const items = [
//   {
//     image: "https://i.pravatar.cc/300?img=1",
//     title: "Sarah Johnson",
//     subtitle: "Frontend Developer",
//     handle: "@sarahjohnson",
//     borderColor: "#3B82F6",
//     gradient: "linear-gradient(145deg, #3B82F6, #000)",
//     url: "https://github.com/sarahjohnson",
//   },
//   {
//     image: "https://i.pravatar.cc/300?img=2",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen",
//   },
// ];
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
              iconUrl="https://www.reactbits.dev/assets/iconpattern.png"
              avatarUrl="me.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
            {/* <img src="me.png" alt="self-portrait" style={{ height: "40vh" }} /> */}
          </div>
          <div class="float-child">
            <div className="about-me-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              magna magna, auctor nec mollis lobortis, consectetur eget nulla.
              Nulla facilisi. Pellentesque commodo, libero eu faucibus
              vulputate, tellus lacus porta felis, sed pretium felis nibh sed
              diam. Donec condimentum id dolor in porta. Donec placerat
              pellentesque sollicitudin. Fusce eget magna nunc. Vivamus vitae
              metus sit amet ex venenatis iaculis nec id nisl. Sed vehicula nibh
              nunc, a feugiat mauris finibus non. Suspendisse eget felis eget
              magna malesuada imperdiet. Nulla interdum dictum velit, a iaculis
              ligula sagittis nec. Donec in elit non erat faucibus porta. Cras
              vitae fringilla nibh. Mauris commodo, lectus ut suscipit maximus,
              lectus sem mattis metus, vel lobortis ex lectus nec justo. Sed
              facilisis odio in auctor hendrerit. Nunc malesuada erat in aliquet
              auctor. Donec ullamcorper nunc et magna ultrices tempor. Nunc
              imperdiet, odio et dignissim rutrum, lacus nulla porttitor orci,
              et volutpat leo enim et nulla. Integer non arcu sem. Praesent eu
              arcu efficitur, finibus metus eget, sagittis nisl.
            </div>
            <Button className="resumeBTN" variant="outlined" color="red">
              Resume
            </Button>
            <Button className="resumeBTN" variant="outlined" color="red">
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
            <img src="swinburne.png"></img>
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
          <CardSwapper></CardSwapper>
          <div
            style={{
              height: "380px",
              margin: "15% 0 0 0",
              position: "relative",
            }}
          >
            <CardSwap
              cardDistance={80}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={true}
            >
              <Card>
                <div className="underline">
                  <p>Card 1</p>
                </div>
                <div>
                  <img
                    className="cricket-card-swap"
                    src="cricket2.png"
                    alt="Thomas Cup School Cricket"
                  ></img>
                </div>
              </Card>
              <Card>
                <div className="underline">
                  <p>School Cricket Winners</p>
                </div>
                <div>
                  <img
                    className="cricket-card-swap"
                    src="cricket.png"
                    alt="Thomas Cup School Cricket"
                  ></img>
                </div>
              </Card>
              <Card>
                <div className="underline">
                  <p>Card 3</p>
                </div>
                <div>
                  <img
                    className="cricket-card-swap"
                    src="cricket3.png"
                    alt="Thomas Cup School Cricket"
                  ></img>
                </div>
              </Card>
              <Card>
                <div className="underline">
                  <p>Card 4</p>
                </div>
                <div>
                  <img
                    className="cricket-card-swap"
                    src="cricket4.png"
                    alt="Thomas Cup School Cricket"
                  ></img>
                </div>
              </Card>
            </CardSwap>
            <div
              className="interests-desc"
              style={{ width: "50%", position: "relative", left: "45%" }}
            >
              <h2>Diving Into the Wild Unknown</h2>
              <p>Extreme Escapes</p>
            </div>
          </div>
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
