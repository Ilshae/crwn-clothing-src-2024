import { FC } from "react";
import { Container, Details } from "./CartItemStyles.ts";

import { CartItemType } from "../../../types.ts";

const CartItem: FC<CartItemType> = ({ name, imageUrl, price, quantity }) => (
  <Container>
    <img src={imageUrl} alt={name} />
    <Details>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </Details>
  </Container>
);

export default CartItem;
