import { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../../store/cart/selectors.ts";
import { setIsCartOpen } from "../../../store/cart/actions.ts";

const CartIcon: FC = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Container onClick={toggleIsCartOpen}>
      <ShoppingIcon src={"/shopping-bag.svg"} alt={"cart"} />
      <Count>{cartCount}</Count>
    </Container>
  );
};

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Count = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export default CartIcon;
