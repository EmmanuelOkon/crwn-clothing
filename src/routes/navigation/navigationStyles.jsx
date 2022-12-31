import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media (max-width: 426px) {
    background-color: red;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 426px) {
    padding: 0px 10px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 526px) {
    font-size: 14px;
    padding: 5px 10px;
    line-height: 1;
    
  }

  @media (max-width: 426px) {
    font-size: 14px;
    padding: 5px 8px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
    padding: 5px;
  }

  @media (max-width: 321px) {
    font-size: 10px;
    padding: 3px;
    line-height: 1;
  }
`;
