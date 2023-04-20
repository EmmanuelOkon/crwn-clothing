import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  background-color: whitesmoke;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.9);
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media (max-width: 426px) {
    padding: 8px 0;
  }
`;

export const LogoContainer = styled(Link)`
  padding: 10px 25px;

  @media (max-width: 426px) {
    padding: 0px 10px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 0px 15px;
  cursor: pointer;

  @media (max-width: 526px) {
    font-size: 14px;
    padding: 5px 10px;
    line-height: normal;
  }

  @media (max-width: 426px) {
    font-size: 13px;
    padding: 5px 8px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
    padding: 5px;
  }

  @media (max-width: 321px) {
    /* font-size: 10px; */
    padding: 3px;
    /* line-height: 1; */
  }
`;
