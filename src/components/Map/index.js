import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224040.18352895865!2d-106.20470354554642!3d28.670859161429743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea449d5d484033%3A0xb7f1a7a706dd1d7b!2sChihuahua!5e0!3m2!1sen!2smx!4v1649353874507!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
