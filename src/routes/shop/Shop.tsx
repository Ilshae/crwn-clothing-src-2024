import { FC, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.tsx";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview.tsx";
import Category from "../category/Category.tsx";

const Shop: FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );

  // return (
  //   <Container>
  //     {Object.keys(categoriesMap).map((key) => {
  //       const products = categoriesMap[key];
  //       return <CategoryPreview key={key} title={key} products={products} />;
  //     })}
  //   </Container>
  // );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Shop;
