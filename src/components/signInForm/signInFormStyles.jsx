import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% auto;

  @media (max-width: 769px) {
  }
`;
export const Title = styled.h2`
  margin: 5px 0;
  text-align: center;
`;

export const Span = styled.span`
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  gap: 0.8rem;
`;

export const SignUpContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const NavLink = styled(Link)`
  background-color: #890000;
  line-height: 50px;
  padding: 0 35px 0 35px;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  color: white;
  font-weight: bolder;

  &:hover {
    background-color: #c40000;
    transition: 300ms ease-in-out all;
  }
`;
