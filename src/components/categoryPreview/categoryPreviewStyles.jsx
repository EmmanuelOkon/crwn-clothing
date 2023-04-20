import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 10px 30px;

  @media (max-width: 769px) {
    padding: 10px 14px;
  }
`;

export const Title = styled.h2`
  padding-bottom: 0.5em;
  @media (max-width: 769px) {
    padding-bottom: 0px;
    margin: 0;
  }
`;

export const TitleLink = styled(Link)`
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 2em;

  @media (max-width: 969px) {
    margin: 1em 0;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
