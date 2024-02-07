import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { FC, useContext } from "react";
import { UserContext } from "../../contexts/user.tsx";
import { signOutUser } from "../../utils/firebase/utils.ts";
import CartIcon from "./cart-icon/CartIcon.tsx";
import CartDropdown from "./cart-dropdown/CartDropdown.tsx";
import { CartContext } from "../../contexts/cart.tsx";

const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <img src={"/crown.svg"} alt={"CRWN Clothing"} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <SignOut onClick={async () => await signOutUser()}>
              SIGN OUT
            </SignOut>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : null}
      </NavContainer>
      <Outlet />
    </>
  );
};

const NavContainer = styled.nav`
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
