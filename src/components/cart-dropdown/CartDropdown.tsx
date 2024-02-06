import { FC } from "react";
import styled from "styled-components";
import Button from "../button/Button.tsx";

const CartDropdown: FC = () => {
  return (
    <Container>
      <CartItems></CartItems>
      <StyledButton>Go to checkout</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
`;

export default CartDropdown;
