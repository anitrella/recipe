import { useState, useEffect } from "react";
import { getMealsCategories } from "services/meals";

export function useGetMealsCategoriesNames() {
  const [listOfCategories, setListOfCategories] = useState();

  useEffect(() => {
    let isMounted = true;

    getMealsCategories()
      .then((r) => r.categories.map((category) => category.strCategory))
      .then((catNames) => {
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
