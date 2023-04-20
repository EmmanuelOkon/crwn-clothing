import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const Title = styled.h2`
  margin: 5px 0;
  text-align: center;
`;

export const Span = styled.span`
  text-align: center;
  margin-bottom: 20px;
`;

export const NavLink = styled.button`
  background-color: #890000;
  line-height: 50px;
  padding: 0 35px 0 35px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
