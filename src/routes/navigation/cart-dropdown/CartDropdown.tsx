import { FC } from "react";
import CartItem from "../cart-item/CartItem.tsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cartSelectors.ts";
import {
  Button,
  CartItems,
  Container,
  EmptyMessage,
} from "./CartDropdownStyles.ts";

import { CartItemType } from "../../../types.ts";
import { setIsCartOpen } from "../../../store/cart/cartSlice.ts";

const CartDropdown: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: CartItemType) => (
            <CartItem key={item.name} {...item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </Container>
  );
};

export default CartDropdown;
