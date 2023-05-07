import styled from "styled-components";

export const TitleWrapper = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  /* justify-content: space-between; */
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin-right: 10px;
  background-color: whitesmoke;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  width: 100%;
  padding: 10px 40px;

  @media (max-width: 969px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
