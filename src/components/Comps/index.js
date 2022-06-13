import React from "react";
import { Container, LogoIMG, Wrapper, Text, LogoI } from "./Comps.styles";
import logo from "../../images/logo.jpeg";
import acsa from "../../images/logo1.jpeg";
import vit from "../../images/logo2.jpeg";

import logo4 from "../../images/logo4.jpeg";
import logo5 from "../../images/logo5.jpeg";
import logo6 from "../../images/logo6.jpeg";
import logo7 from "../../images/logo7.jpeg";
const Comps = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h1>Asociados</h1>
        </Text>
        <LogoIMG src={logo} />
        <LogoI src={acsa} />
        <LogoI src={vit} />

        <LogoI src={logo4} />
        <LogoI src={logo5} />
        <LogoI src={logo6} />
        <LogoI src={logo7} />
      </Container>
    </Wrapper>
  );
};

export default Comps;
