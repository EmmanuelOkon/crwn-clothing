import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #003f7d;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 300ms ease-in-out all;

  &:hover {
    background-color: #002347;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #0784ff;
  color: white;
  line-height: normal;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #56abff;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #00172f;
  color: white;

  &:hover {
    background-color: #003569;
    color: white;
    border: none;
  }
`;
