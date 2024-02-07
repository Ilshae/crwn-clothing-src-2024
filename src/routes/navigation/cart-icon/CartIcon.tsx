import { FC, useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../../contexts/cart.tsx";

const CartIcon: FC = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

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
