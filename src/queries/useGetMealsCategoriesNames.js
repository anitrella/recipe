import { useState, useEffect } from "react";
import { getMealsCategoriesNames } from "services/meals";

export function useGetMealsCategoriesNames() {
  const [listOfCategories, setListOfCategories] = useState();

  useEffect(() => {
    let isMounted = true;

    getMealsCategoriesNames().then((catNames) => {
      if (isMounted) {
        setListOfCategories(catNames);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { listOfCategories };
}
