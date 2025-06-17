import "./App.css";
import { useState } from "react";
import Resume from "./Resume";
import Navbar from "./Navbar";
import HoverImageSlider from "./HoverSlider";
import CardSwap, { Card } from "./try";
import AudioPlayer from "./AudioPlayer";
import CardAnimation from "./PopupAnimation";
import Portfolio from "./Portfolio";

function App() {
  const [page, setPage] = useState(1);
  var content = <AudioPlayer></AudioPlayer>;
  switch (page) {
    case 1:
      content = <AudioPlayer></AudioPlayer>;
      break;
    case 2:
      content = <Resume></Resume>;
      break;
    case 3:
      content = <Portfolio></Portfolio>;
      break;
    case 4:
      // content = <Contact></Contact>
      break;
    default:
      content = <AudioPlayer></AudioPlayer>;
  }

  const handleClick = (pageNo) => {
    console.log(pageNo);
    setPage(pageNo);
    switch (page) {
      case 1:
        content = <AudioPlayer></AudioPlayer>;
        break;
      case 2:
        content = <Resume></Resume>;
        break;
      case 3:
        content = <Portfolio></Portfolio>;
        break;
      case 4:
        // content = <Contact></Contact>
        break;
      default:
        content = <AudioPlayer></AudioPlayer>;
    }
  };
  return (
    <div className="App">
      {/* <AudioPlayer></AudioPlayer> */}
      {/* <HoverImageSlider leftImage="image.png" rightImage="image3.png" /> */}
      <Navbar onPageClick={handleClick}></Navbar>
      {content}
      {/* <Resume></Resume> */}
      {/* <Portfolio></Portfolio>
      <CardAnimation></CardAnimation> */}
    </div>
  );
}

export default App;
