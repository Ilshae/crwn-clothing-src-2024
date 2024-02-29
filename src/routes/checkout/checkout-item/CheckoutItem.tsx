import { useDispatch } from "react-redux";
import {
  Arrow,
  BaseSpan,
  Container,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./CheckoutItemStyles.ts";
import { FC } from "react";

import { CartItemType } from "../../../types.ts";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../../store/cart/cartSlice.ts";

const CheckoutItem: FC<CartItemType> = (cartItem) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItem));

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};

export default CheckoutItem;
