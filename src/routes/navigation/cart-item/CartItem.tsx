import { FC } from "react";
import styled from "styled-components";

const CartItem: FC = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Container>
      <img src={imageUrl} alt={name} />
      <Details>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;

export default CartItem;
