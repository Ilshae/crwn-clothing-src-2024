import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Card, Container } from "./DirectoryItemStyles.ts";
import { Category } from "../../../data/categories.ts";

const DirectoryItem: FC<Category> = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Container onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Card>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Card>
    </Container>
  );
};

export default DirectoryItem;
