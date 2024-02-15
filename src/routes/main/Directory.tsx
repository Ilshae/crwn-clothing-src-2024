import { FC } from "react";
import DirectoryItem from "./DirectoryItem.tsx";
import categories from "../../data/categories.json";
import styled from "styled-components";

const Directory: FC = () => {
  return (
    <Container>
      {categories.map((category) => (
        <DirectoryItem key={category.id} {...category} />
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

export default Directory;
