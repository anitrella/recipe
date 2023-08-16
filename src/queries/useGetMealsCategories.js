import { useState, useEffect } from "react";
import { getMealsCategories } from "../services/meals";

export function useGetMealsCategories() {
  const [allCategories, setAllCategories] = useState();

  // Costruisco la chiamata API per visualizzare le categorie
  useEffect(() => {
    let isMounted = true;

    getMealsCategories().then((r) => {
      if (isMounted) {
        setAllCategories(r.categories);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    mealsCategories: allCategories,
  };
}
