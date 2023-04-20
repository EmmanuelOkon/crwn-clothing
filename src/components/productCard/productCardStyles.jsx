import styled from "styled-components";

export const ProductCardComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 5px;

  @media (max-width: 769px) {
    height: 100%;
    border: 0.5px solid gray;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media (max-width: 969px) {
      width: 260px;
      height: 320px;
      object-fit: cover;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media (max-width: 769px) {
    display: flex;
    padding: 5px 0;
    align-items: center;
  }

  /* @media (max-width: 426px) {
    background-color: red;

    display: flex;
    align-items: center;
  } */
`;

export const FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media (max-width: 769px) {
    padding-left: 5px;
    margin-bottom: 0;
  }
`;

export const FooterPrice = styled.span`
  @media (max-width: 769px) {
    padding-right: 5px;
  }
`;
