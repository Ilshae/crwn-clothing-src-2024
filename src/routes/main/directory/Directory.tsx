import { FC } from "react";
import DirectoryItem from "../directoryItem/DirectoryItem.tsx";
import { Container } from "./DirectoryStyles.ts";
import { categories } from "../../../data/categories.ts";

const Directory: FC = () => {
  return (
    <Container>
      {categories.map((category) => (
        <DirectoryItem key={category.id} {...category} />
      ))}
    </Container>
  );
};

export default Directory;
