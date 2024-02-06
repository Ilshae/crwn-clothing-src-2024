import { FC } from "react";
import styled from "styled-components";
import Button from "../button/Button.tsx";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <StyledButton buttonType={"inverted"}>Add to cart</StyledButton>
    </Container>
  );
};

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    Image {
      opacity: 0.8;
    }

    StyledButton {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.span`
  width: 10%;
`;

export default ProductCard;
