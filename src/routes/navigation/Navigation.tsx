import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { FC, useContext } from "react";
import { UserContext } from "../../contexts/user.tsx";
import { signOutUser } from "../../utils/firebase/utils.ts";

const Navigation: FC = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <NavWrapper>
        <LogoContainer to="/">
          <img src={"/crown.svg"} alt={"CRWN Clothing"} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <SignOut onClick={async () => await signOutHandler()}>
              SIGN OUT
            </SignOut>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavWrapper>
      <Outlet />
    </>
  );
};

const NavWrapper = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const SignOut = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export default Navigation;
