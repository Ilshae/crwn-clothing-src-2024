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
      9;
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
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
