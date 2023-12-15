import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loginx from "./assets/components/Loginx";
import "./App.css";
import Registerx from "./assets/components/Registerx.jsx";
import Tablex from "./assets/components/Tablex.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  let [check, setCheck] = useState(true);

  setCheck(false); // check = false
  return (
    <ChakraProvider>
      {check ? (
        <Loginx setCheck={setCheck} />
      ) : (
        <Registerx setCheck={setCheck} />
      )}
      <Tablex />
    </ChakraProvider>
  );
}

export default App;
