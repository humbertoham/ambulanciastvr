import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 800px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  @media (max-width: 768px) {
    min-height: 600px;
    background-attachment: unset;
  }
`;

export const Text = styled.div`
  font-family: "Poppins", sans-serif;
  z-index: 1;
  padding-top: 300px;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-size: var(--fontSuperBig);
  p {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 768px) {
    padding-top: 200px;
    font-size: var(--fontBig);
  }
`;
