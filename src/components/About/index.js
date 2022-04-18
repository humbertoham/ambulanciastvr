import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";
import about4 from "../../images/about4.svg";
import about5 from "../../images/about5.svg";
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
            Somos un equipo multidisciplinar que ofrece diversidad de servicios
            medicos de atención prehospitalaria con calidez humana, calidad y
            eficiencia. Ofrecemos traslados de pacientes de manera responsable,
            segura y siempre oportuna. Realizamos traslados dentro y fuera del
            estado via terrestre y aérea. Contamos ademas con personal
            calificado para proporcionar cuidados de pacientes en domicilio
            realizando cuidados mínimos asta la realización y administracion de
            terapia farmacológica prescrita.
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
            Tener el mejor equipo multidisciplinario proporcionando la mejor
            atención al cliente en atención medica Prehospitalaria traslados y
            capacitaciones. Proporcionando una ambiente de calidad, calidez y
            confianza.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Visión </h1>
          <p>
            Ser el mejor equipo multidisciplinario en atención medica
            Prehospitalario del norte del país con personal altamente capacitado
            y con unidades altamente equipadas de alta especialidad.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={about4} />
        </MapC>
        <Text>
          <h1>Valores</h1>
          <p>Integridad</p>
          <p>Excelencia</p>
          <p>Lealtad</p>
          <p>Compromiso</p>
          <p>Vocación </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={about4} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>¿Por qué elegirnos?</h1>
          <p>
            Somos el mejor equipo en Atención medica Prehospitalaria en
            traslados, básicos y de terapia Intensiva así como cuidados en casa
            y hospital. Ademas contamos con personal altamente calificado y
            constantemente actualizado, nuestras unidades se encuentran
            debidamente equipadas contando con equipo biomedico de alta
            especialidad para manejo de cualquier tipo de pacientes, cumpliendo
            las normatividad oficial mexicanas vigentes.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={about5} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
