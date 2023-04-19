import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 769px) {
  }

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
