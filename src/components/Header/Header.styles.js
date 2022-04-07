import styled from "styled-components";

export const LogoN = styled.img`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const MenuLink = styled.a`
  margin: 18px;
  margin-top: 25px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--blue);
  transition: all 0.3s ease-in;
  font-size: var(--fontMed);
  font-family: "Montserrat", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--white);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Logo = styled.a`
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    border-radius: 50%;
    background: var(--blue);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
