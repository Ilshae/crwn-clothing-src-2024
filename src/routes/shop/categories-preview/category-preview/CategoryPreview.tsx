import { FC } from "react";
import ProductCard from "../../../navigation/product-card/ProductCard.tsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryPreview: FC = ({ title, products }) => {
  return (
    <Container>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export default CategoryPreview;
