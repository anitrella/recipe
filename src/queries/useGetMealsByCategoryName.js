import { useState, useEffect } from "react";
import { getMealsByCategoryName } from "services/meals";

export function useGetMealsByCategoryName(category) {
  const [recipesList, setRecipesList] = useState();

  // Chiamo l'Api per ottenere i dati dei pasti divisi per categoria
  useEffect(() => {
    let isMounted = true;
    getMealsByCategoryName(category).then((meals) => {
      if (isMounted) {
        setRecipesList(meals);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [category]);

  return {
    recipesList,
  };
}
