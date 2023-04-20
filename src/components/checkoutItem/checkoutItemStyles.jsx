import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 16px;
  align-items: center;

  @media (max-width: 826px) {
    padding: 10px 0;
    font-size: 14px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 18%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 20%;
  display: flex;
  justify-content: start;
  position: relative;

  @media (max-width: 826px) {
    left: 0;
  }
`;

export const Quantity = styled.span`
  width: 20%;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
  left: 12px;

  @media (max-width: 826px) {
    left: 8px;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  align-items: center;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled.span`
  width: 20%;
  display: flex;
  justify-content: start;
  position: relative;

  @media (max-width: 826px) {
    left: 4px;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  cursor: pointer;
`;
