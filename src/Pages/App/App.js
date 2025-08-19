import "./App.css";
import { useState } from "react";
import Resume from "../Resume/Resume";
import Navbar from "../../Components/Navbar/Navbar";
// import HoverImageSlider from "../../Components/HoverSlider";
import Contact from "../Contact/Contact";
import HomeScreen from "../../Components/HomeScreen";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  const [page, setPage] = useState(1);
  var content = <HomeScreen></HomeScreen>;
  switch (page) {
    case 1:
      content = <HomeScreen></HomeScreen>;
      break;
    case 2:
      content = <Resume></Resume>;
      break;
    case 3:
      content = <Portfolio></Portfolio>;
      break;
    case 4:
      content = <Contact></Contact>;
      break;
    default:
      content = <HomeScreen></HomeScreen>;
  }

  const handleClick = (pageNo) => {
    console.log(pageNo);
    setPage(pageNo);
    switch (page) {
      case 1:
        content = <HomeScreen></HomeScreen>;
        break;
      case 2:
        content = <Resume></Resume>;
        break;
      case 3:
        content = <Portfolio></Portfolio>;
        break;
      case 4:
        content = <Contact></Contact>;
        break;
      default:
        content = <HomeScreen></HomeScreen>;
    }
  };
  return (
    <div className="App">
      <Navbar onPageClick={handleClick}></Navbar>
      {content}
      {/* <HoverImageSlider></HoverImageSlider> */}
    </div>
  );
}

// function App() {
//   const [page, setPage] = useState(1);
//   var content = <Resume></Resume>;
//   switch (page) {
//     case 1:
//       content = <Resume></Resume>;
//       break;
//     case 2:
//       content = <Portfolio></Portfolio>;
//       break;
//     case 3:
//       content = <Contact></Contact>;
//       break;
//     default:
//       content = <Resume></Resume>;
//   }

//   const handleClick = (pageNo) => {
//     console.log(pageNo);
//     setPage(pageNo);
//     switch (page) {
//       case 1:
//         content = <Resume></Resume>;
//         break;
//       case 2:
//         content = <Portfolio></Portfolio>;
//         break;
//       case 3:
//         content = <Contact></Contact>;
//         break;
//       default:
//         content = <Resume></Resume>;
//     }
//   };
//   return (
//     <div className="App">
//       <Navbar onPageClick={handleClick}></Navbar>
//       {content}
//       {/* <HoverImageSlider></HoverImageSlider> */}
//     </div>
//   );
// }
export default App;
