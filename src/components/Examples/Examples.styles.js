import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;

  padding-bottom: 64px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;

  text-align: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: var(--fontSuperBig);
    margin: 0;
    color: var(--brown);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    padding: 15px;
    font-weight: 600;
    font-size: var(--fontBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 0px 24px 24px;
  background: var(--white);
  width: 600px;
  z-index: 1;
`;
export const Text = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--black);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    font-weight: 700;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CardHeading = styled.h1`
  text-align: center;
  color: var(--black);
  font-size: var(--fontBig);
  font-family: "Poppins", sans-serif;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  font-family: "Montserrat", sans-serif;
  max-width: 400px;
  font-size: var(--fontMed);
  text-align: left;
  margin: auto;
`;

export const Page = styled.img`
  display: block;
  height: auto;
  width: 100%;
  margin: auto;
  padding: 0px 30px;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const LogoN = styled.img`
  width: 50px;
`;
