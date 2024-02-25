import { FC } from "react";
import { BUTTON_TYPE_CLASSES } from "../../../components/button/Button.tsx";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../store/cart/actions.ts";
import { selectCartItems } from "../../../store/cart/cartSelectors.ts";
import {
  Button,
  Container,
  Footer,
  Image,
  Name,
  Price,
} from "./ProductCardStyles.ts";

import { CategoryItem } from "../../../types.ts";

const ProductCard: FC<{ product: CategoryItem }> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </Container>
  );
};

export default ProductCard;
