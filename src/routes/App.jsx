import "./App.css";
import Menu from "../Components/Menu";
import Container from "../Components/Container";
import { useState } from "react";

function App() {
  // const body = document.querySelector("body");

  const [openmenu, setopenmenu] = useState(true);

  const open = () => {
    setopenmenu(!openmenu);
  };

  const close = () => {
    setopenmenu(!openmenu);
  };

  return (
    <div className="App">
      <Menu
        // isLightMode={body.classList.contains("light-mode")}
        open={open}
        close={close}
        openmenu={openmenu}
        setopenmenu={setopenmenu}
      />
      <Container open={open} close={close} openmenu={openmenu} />
    </div>
  );
}

export default App;
