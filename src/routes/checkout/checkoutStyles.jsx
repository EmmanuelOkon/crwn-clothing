import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  @media (max-width: 826px) {
    width: 70%;
  }

  @media (max-width: 426px) {
    width: 80%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;

  &:last-child {
    /* width: 8%; */

    @media (max-width: 826px) {
      /* width: 1%; */
    }
  }

  @media (max-width: 826px) {
    font-size: 14px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  font-weight: bolder;

  @media (max-width: 826px) {
    font-size: 26px;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  cursor: pointer;
`;
