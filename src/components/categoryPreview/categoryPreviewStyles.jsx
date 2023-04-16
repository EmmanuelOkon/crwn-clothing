import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 769px) {
    /* background-color: red; */
    padding: 1rem 0;
  }
`;

export const Title = styled.h2`
  @media (max-width: 769px) {
    /* font-size: 10px; */
    margin: 0;
  }
`;

export const TitleLink = styled(Link)`
  /* font-size: 28px; */
  /* margin-bottom: 25px; */
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 969px) {
    margin: 2em 0;
    overflow-x: auto;
  }

  /* @media (max-width: 426px) {
    background-color: orange;
    overflow-x: auto;
  } */
`;
