import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../../store/cart/cartSelectors.ts";
import { Container, Count, ShoppingIcon } from "./CartIconStyles.ts";
import { setIsCartOpen } from "../../../store/cart/cartSlice.ts";

const CartIcon: FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Container onClick={toggleIsCartOpen}>
      <ShoppingIcon src={"/shopping-bag.svg"} alt={"cart"} />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;
