import { FC } from "react";
import styled from "styled-components";
import ProductCard from "../../navigation/product-card/ProductCard.tsx";

const CategoryPreview: FC = ({ title, products }) => {
  return (
    <Container>
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </Container>
  );
};

const Container = styled.div``;

const Preview = styled.div``;

export default CategoryPreview;
