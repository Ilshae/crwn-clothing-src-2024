import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../navigation/product-card/ProductCard.tsx";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCaterogiesMap } from "../../../store/categories/selectors.ts";

const Category: FC = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCaterogiesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category?.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
`;

export default Category;
