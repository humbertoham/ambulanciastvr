import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--orange);
`;

export const Container = styled.div`
  text-align: center;
  padding-bottom: 3%;
`;

export const LogoIMG = styled.img`
  margin: 20px 20px 50px;
  width: 90%;
  height: auto;
  vertical-align: middle;
`;
export const LogoI = styled.img`
  margin: 20px 20px 50px;
  width: 25%;
  height: auto;
  vertical-align: middle;
`;
export const Text = styled.div`
  padding: 10px;
  margin: auto;

  h1 {
    font-family: "Poppins", sans-serif;
    color: var(--white);
    font-size: var(--fontSuperBig);
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
