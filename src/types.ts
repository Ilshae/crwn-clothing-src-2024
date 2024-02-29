export type CartItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
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

export type StateType = {
  user: { currentUser: string };
  categories: { categories: Category[] };
  cart: { cartItems: CartItemType[]; isCartOpen: boolean };
};
