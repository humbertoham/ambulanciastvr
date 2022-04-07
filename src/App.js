import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Foot from "./components/Foot";
import { GlobalStyle } from "./GlobalStyle";
import "swiper/css/bundle";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Foot />
      <GlobalStyle />
    </>
  );
}

export default App;
