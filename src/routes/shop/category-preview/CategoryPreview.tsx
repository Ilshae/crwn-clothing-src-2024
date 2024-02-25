import { FC } from "react";
import ProductCard from "../../navigation/product-card/ProductCard.tsx";
import { Container, Preview, Title } from "./CategoryPreviewStyles.ts";

import { CategoryItem } from "../../../types.ts";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
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

export default CategoryPreview;
