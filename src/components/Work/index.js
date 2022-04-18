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
              <CardOptionsNote>
                Trasladamos a los pacientes tomando las medidas necesarias para
                la seguridad de este, y con la atención médica adecuada para
                trasladarlos a dónde sea según sus necesidades.
              </CardOptionsNote>
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
              <CardOptionsNote>
                Cubrimos eventos o espectáculos que requieren de logística
                médica, previniendo cualquier emergencia.
              </CardOptionsNote>
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
              <CardOptionsNote>
                Durante el traspaso del cuidado en el hospital al hogar, las
                familias contarán con una red de apoyo, que incluye al equipo de
                profesionales de la salud, como médicos, enfermeros, terapeutas,
                cuidadores y proveedores de equipos médicos.
              </CardOptionsNote>
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
              <CardOptionsNote>
                Primeros auxilios, comité de crisis, evacuación, incendios,
                materiales peligrosos, higiene y seguridad
              </CardOptionsNote>
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
              <CardOptionsNote>
                Le ofrecemos tanques de oxígeno con diferentes capacidades,
                ligeros y prácticos. Nuestros tanques son económicos,
                recargables y seguros.
              </CardOptionsNote>
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
              <CardOptionsNote>
                Tomamos las medidas necesarias para traslados de pacientes con
                COVID-19, en los vehículos de transporte se optimizamos las
                estrategias de ventilación para reducir el riesgo de exposición.
              </CardOptionsNote>
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
              <CardOptionsNote>
                Amublancias TVR acude al lugar donde ocurre la emergencia con
                Unidades básicas o de Terapia Intensiva Móvil, equipadas con
                avanzada tecnología en equipo médico y la atención de Médicos
                Especialistas, Paramédicos y Enfermeros altamente capacitados
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Work;
