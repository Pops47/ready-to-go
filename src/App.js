import "./App.css";
import { useState } from "react";
import Switch from "./components/Switch.js";
import rocketImage from "./assets/images/Rocket.svg";

function App() {
  const [rocket, setRocket] = useState("left");
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const handleClick = () => {
    setRocket("right");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          className={rocket === "left" ? "logo left" : "logo right"}
          src={rocketImage}
          alt="rocket logo"
        />
        <h2>Ready to go</h2>
      </header>
      <main className="App-main">
        <div className="left-column">
          <Switch switchValue={switch1} setSwitch={setSwitch1} />
          <Switch switchValue={switch2} setSwitch={setSwitch2} />
          <Switch switchValue={switch3} setSwitch={setSwitch3} />
        </div>
        <div className="right-column">
          <div
            onClick={handleClick}
            className={
              switch1 && switch2 && switch3 ? "result isGreen" : "result isRed"
            }
          >
            {switch1 && switch2 && switch3 ? "Go !" : "No Way !"}
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <p>
          Made with <span>React</span> at <span>Le reacteur</span> by{" "}
          <span>Pops</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
