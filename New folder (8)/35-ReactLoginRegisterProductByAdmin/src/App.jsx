import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loginx from "./assets/components/Loginx";
import "./App.css";
import Registerx from "./assets/components/Registerx.jsx";
import Tablex from "./assets/components/Tablex.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PostForm from "./assets/components/PostForm.jsx";

function App() {
  let [check, setCheck] = useState(true);
  let [login, setLogin] = useState(false);
  let [admin, setAdmin] = useState(false);
  console.log(admin);
  return (
    <ChakraProvider>
      {login ? (
        
        <Tablex setAdmin={setAdmin} admin={admin} />
      ) : check ? (
        <Loginx
          setCheck={setCheck}
          setLogin={setLogin}
          setAdmin={setAdmin}
          admin={admin}
        />
      ) : (
        <Registerx setCheck={setCheck} setLogin={setLogin} />
      )}
      <PostForm />
    </ChakraProvider>
  );
}

export default App;
