import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Card, Container } from "./DirectoryItemStyles.ts";
import { DirectoryCategory } from "../directory/Directory.tsx";

const DirectoryItem: FC<DirectoryCategory> = ({ title, imageUrl, route }) => {
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
