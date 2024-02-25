export type CartItemType = {
  name: string;
  imageUrl: string;
  price: string;
  quantity: string;
};
export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
export type CategoryMap = {
  [key: string]: CategoryItem[];
};
