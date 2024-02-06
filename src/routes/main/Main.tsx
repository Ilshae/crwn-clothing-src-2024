import { FC } from "react";
import Category from "./Category.tsx";
import categories from "../../data/categories.json";
import styled from "styled-components";

const Main: FC = () => {
  return (
    <Container>
      {categories.map(({ id, title, imageUrl }) => (
        <Category key={id} title={title} imageUrl={imageUrl} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Main;
