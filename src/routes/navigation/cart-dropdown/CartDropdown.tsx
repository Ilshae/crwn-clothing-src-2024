import { FC } from "react";
import styled from "styled-components";
import Button from "../../../components/button/Button.tsx";
import CartItem from "../cart-item/CartItem.tsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/selectors.ts";

const CartDropdown: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
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

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export default CartDropdown;
