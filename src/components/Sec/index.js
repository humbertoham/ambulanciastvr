import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./Sec.styles";

import MapP from "../../images/sec1.jpeg";
import Mision from "../../images/hey.jpeg";
import covid1 from "../../images/covid1.jpeg";
import covid2 from "../../images/covid2.jpeg";
import covid3 from "../../images/covid3.jpeg";
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
          <h1>Vehículo de Respuesta Rápida</h1>
          <p>
            En Ambulancias TVR “Trasladó Vital y Rescate” Implementamos el Nuevo
            “VRR” Vehículo de Respuesta Rápida para dar un mayor servicio a
            nuestros Clientes.
          </p>
          <p>
            El Vehículo de respuesta Rápida se encarga de dar recorridos dentro
            de los eventos así como acudir a Emergencias y valorar si requiere
            el apoyo e ir atendiendo al paciente en lo que llega la ambulancia o
            bien apoyar a la ambulancia con personal y equipo, así como apoyar
            con traslado a hospitales a paciente NO Graves.{" "}
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
          <p>
            VRR es operado por un un paramédico TAMP para así brindarle un
            servicio de Calidad.
          </p>
          <p>
            El VRR está debidamente identificado y cuenta con torretas y sirena
            para cualquier emergencia, así mismo cuenta con equipo de
            comunicación con las ambulancias TVR y el CRUM (Centro Regulador de
            Urgencias Médicas) para en caso de ser necesario pedir apoyo de más
            ambulancias en emergencias con múltiples lesionados{" "}
          </p>
          <p>El Vehículo de Respuesta Rápida cuenta con:</p>
          <p>✔️Botiquín de Trauma </p>
          <p>✔️Botiquín de vías Aéreas </p>
          <p>✔️Collarines </p>
          <p>✔️Kit de Férulas </p>
          <p>✔️Extintor </p>
          <p>✔️Tanque de oxígeno </p>
          <p>✔️DEA </p>
          <p>
            Y todo el material necesario para atender y estabilizar un paciente
            de Trauma.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Traslado y atención a pacientes con COVID-19</h1>
          <p>
            Tomamos las medidas necesarias para traslados de pacientes con
            COVID-19, en los vehículos de transporte se optimizamos las
            estrategias de ventilación para reducir el riesgo de exposición.
            Esto incluye incrementar al máximo las salidas de aire (por ejemplo,
            al abrir las ventanillas y las ventilaciones) y poner todos los
            controles de climatización para recibir el aire exterior (no en
            recirculación del aire). Esto se aplica a la cabina del conductor y
            el compartimiento de los pacientes, si tienen sistemas
            independientes.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={covid1} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={covid2} />
        </MapC>
        <Text>
          <p>
            En el caso de una transferencia interhospitalaria, tanto el centro
            de origen como el de destino deben confirmar el lugar de
            transferencia y llegada del paciente para facilitar que el traslado
            se haga sin problemas, reducir al mínimo la exposición ambiental en
            el establecimiento y prevenir la exposición del personal sin
            protección, los demás pacientes y los visitantes. También debe
            especificarse el lugar que se usará para ponerse y quitarse el EPP,
            tanto en el centro de origen como en el de destino.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={covid2} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
