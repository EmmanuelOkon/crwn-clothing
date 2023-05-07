import styled from "styled-components";
import Button from "../button/buttonComponent";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media (max-width: 769px) {
    /* height: 100px;
    min-width: 500px; */
  }
`;

export const FormTitle = styled.h2`
  margin: 10px 0;
`;

export const PaymentButon = styled(Button)`
  margin-top: 30px;
  margin-left: auto;
`;
