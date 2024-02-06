import { createContext, FC, ReactNode, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
});

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
