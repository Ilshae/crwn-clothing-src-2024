import { FC, useContext } from "react";
import { ProductsContext } from "../../contexts/products.tsx";
import ProductCard from "../navigation/product-card/ProductCard.tsx";
import styled from "styled-components";

const Shop: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export default Shop;
