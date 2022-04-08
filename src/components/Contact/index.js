import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="email" size="2x" icon={faEnvelope} />
            Email: tvremergenciasmedicas
          </h1>
          <h1>@hotmail.com</h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            (614) 152 26-76
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            (614) 155 69-04
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            (614) 468 43-16
          </h1>
        </Con>
        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: Chihuahua, Chihuahua, México.
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;
