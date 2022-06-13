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
  Men,
} from "./Gallery.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "../../images/Gallery.jpeg";
import image2 from "../../images/Gallery2.jpeg";
import image3 from "../../images/Gallery3.jpeg";
import image4 from "../../images/Gallery4.jpeg";
import image5 from "../../images/Gallery5.jpeg";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Galería</h1>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image1} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image2} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image3} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image4} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image5} />
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Gallery;
