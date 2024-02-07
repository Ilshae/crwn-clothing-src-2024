import { FC, useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button.tsx";
import { CartContext } from "../../../contexts/cart.tsx";
import CartItem from "../cart-item/CartItem.tsx";
import { useNavigate } from "react-router-dom";

const CartDropdown: FC = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <StyledButton onClick={goToCheckoutHandler}>Go to checkout</StyledButton>
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
