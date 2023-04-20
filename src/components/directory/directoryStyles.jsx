import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 30px;

  @media (max-width: 429px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;
