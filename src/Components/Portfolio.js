import Particles from "./Particles";
import "./Portfolio.css";
import ChromaGrid from "./ChromaGrid";
import Aurora from "./Aurora/Aurora";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
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
const programmingLanguages = [
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          width={50}
        />
        <div>JavaScript</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue.js"
          width={50}
        />
        <div>Vue.js</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          width={50}
        />
        <div>Python</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          width={50}
        />
        <div>Java</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
          alt="C#"
          width={50}
        />
        <div>C#</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
          width={50}
        />
        <div>C++</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
          alt="Ruby"
          width={50}
        />
        <div>Ruby</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          alt="PHP"
          width={50}
        />
        <div>PHP</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5"
          width={50}
        />
        <div>HTML5</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3"
          width={50}
        />
        <div>CSS3</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          width={50}
        />
        <div>React</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue.js"
          width={50}
        />
        <div>Vue.js</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          width={50}
        />
        <div>TypeScript</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
          alt="Kotlin"
          width={50}
        />
        <div>Kotlin</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          alt="Flutter"
          width={50}
        />
        <div>Flutter</div>
      </div>
    ),
  },
];

const databaseTechnologies = [
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
          alt="SQLite"
          width={50}
        />
        <div>SQLite</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          alt="Firebase"
          width={50}
        />
        <div>Firebase</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          width={50}
        />
        <div>MongoDB</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="MySQL"
          width={50}
        />
        <div>MySQL</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img src="dynamoDB.png" alt="DynamoDB" width={50} />
        <div>DynamoDB</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
          alt="MariaDB"
          width={50}
        />
        <div>MariaDB</div>
      </div>
    ),
  },
];

const devTools = [
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://img.icons8.com/color/96/android-studio--v3.png"
          alt="Android Studio"
          width={50}
        />
        <div>Android Studio</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img src="aws.png" alt="AWS" width={50} />
        <div>AWS</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          width={50}
        />
        <div>Node.js</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://img.icons8.com/fluency/96/arduino.png"
          alt="Arduino"
          width={50}
        />
        <div>Arduino</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://img.icons8.com/color/96/visual-studio-code-2019.png"
          alt="VS Code"
          width={50}
        />
        <div>VS Code</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg"
          alt="Unity"
          width={50}
        />
        <div>Unity</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img src="echo3D.png" alt="echo3D" width={50} />
        <div>echo3D</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://img.icons8.com/color/96/microsoft-teams.png"
          alt="Microsoft Teams"
          width={50}
        />
        <div>Teams</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img src="sharepoint.png" alt="SharePoint" width={50} />
        <div>SharePoint</div>
      </div>
    ),
  },
  {
    content: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://img.icons8.com/color/96/ms-outlook.png"
          alt="Outlook"
          width={50}
        />
        <div>Outlook</div>
      </div>
    ),
  },
];

export default function Portfolio() {
  return (
    <div className="Portfolio">
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
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.8}
      />
      <section id="technologies">
        <h1 className="heading">The Tech Arsenal</h1>
        <div className="techArsenal">
          <div className="techScrollDiv">
            <InfiniteScroll
              items={databaseTechnologies}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.3}
              autoplayDirection="down"
              pauseOnHover={true}
            />
            <InfiniteScroll
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.35}
              autoplayDirection="up"
              pauseOnHover={true}
              items={programmingLanguages}
            />
            <InfiniteScroll
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.3}
              autoplayDirection="down"
              pauseOnHover={true}
              items={devTools}
            />
          </div>
        </div>
      </section>

      <section id="projects">
        <h1 className="heading">My Innovation Lab</h1>
        <ChromaGrid
          // items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </section>
    </div>
  );
}
