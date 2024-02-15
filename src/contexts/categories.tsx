import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/utils.ts";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
