import { Outlet } from "react-router-dom";
import { FC } from "react";
import { signOutUser } from "../../utils.ts";
import CartIcon from "./cart-icon/CartIcon.tsx";
import CartDropdown from "./cart-dropdown/CartDropdown.tsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelectors.ts";
import { selectIsCartOpen } from "../../store/cart/cartSelectors.ts";
import {
  LogoContainer,
  NavContainer,
  NavLink,
  NavLinks,
  SignOut,
} from "./NavigationStyles.ts";

const Navigation: FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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

export default Navigation;
