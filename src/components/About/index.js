import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos una empresa de servicios de atención pre hospitalaria de gran
            calidad, eficiencia y calidez humana, nos especializamos en el
            traslado de los pacientes se realiza de manera responsable, segura y
            siempre oportuna.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Misión</h1>
          <p>
            Contar con el mejor servicio al cliente en traslados, rescates,
            atención médica y brindar la mejor confianza y seguridad a los
            pacientes en nuestro cuidado.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Por qué elegirnos?</h1>
          <p>
            Somos la mejor empresa en cuidados de traslados, rescates y atención
            médica de Chihuahua, contamos con el mejor equipo médico y el
            personal más capacitado de la ciudad.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
