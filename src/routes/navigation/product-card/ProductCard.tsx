import { FC } from "react";
import { BUTTON_TYPE_CLASSES } from "../../../components/button/Button.tsx";
import { useDispatch } from "react-redux";
import {
  Button,
  Container,
  Footer,
  Image,
  Name,
  Price,
} from "./ProductCardStyles.ts";

import { CategoryItem } from "../../../types.ts";
import { addItemToCart } from "../../../store/cart/cartSlice.ts";

const ProductCard: FC<{ product: CategoryItem }> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

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
