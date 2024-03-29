import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../theme.ts";

export const NavContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const SignOut = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
