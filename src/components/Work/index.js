import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faKitMedical,
  faCalendarCheck,
  faTruckMedical,
  faMaskFace,
  faHospital,
  faTruckPickup,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="servicios">
      <Content>
        <h1>Servicios</h1>
        <div className="divider"></div>
        <p>Servicio de ambulancia las 24 hrs</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckMedical} />

            <CardHeading>Traslados / Locales y foráneos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faCalendarCheck} />

            <CardHeading>Cobertura de eventos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHospital} />
            <CardHeading>Cuidados / Casa y hospital</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPersonRunning} />
            <CardHeading>Capacitación / Primer respondiente </CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faMaskFace} />
            <CardHeading>
              Renta y venta de concentradores y tanques de O2
            </CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckPickup} />
            <CardHeading>
              Traslado y atención a pacientes con COVID-19
            </CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faKitMedical} />
            <CardHeading>Emergencias</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>Falta información</CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Work;
