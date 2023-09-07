import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";

import { ThemeProvider } from "styled-components";
import {temaClaro, temaOscuro} from "./Components/UI/Temas"

import { BtnTema } from "./Components/UI";
import SwitcherThema from "./Components/SwitcherThema";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema)

  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema} >
        <SwitcherThema tema={tema}></SwitcherThema>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
