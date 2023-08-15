import React, { useState, useEffect } from "react";
import { useGetMealsCategoriesNames } from "queries/useGetMealsCategoriesNames";
import MainLayout from "layout/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [meals, setMeals] = useState([]);
  const [allMealsId, setAllMealsId] = useState([]);
  const [details, setDetails] = useState();
  const [allRecipeComplete, setAllRecipeComplete] = useState([]);

  //Passo 1: In questa useEffect chiamo l'api per avere la lista dei nomi di tutte le categorie
  const { listOfCategories } = useGetMealsCategoriesNames();

  //Passo 2: In questa useEffect faccio una chiamata API per avere i meals per ogni categorie
  useEffect(() => {
    let isMounted = true;

    if (listOfCategories)
      listOfCategories.forEach((category) => {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        )
          .then((r) => r.json())
          .then((r) => {
            if (isMounted) {
              setMeals(r.meals);
            }
          })
          .catch((error) => console.log("Error" + error));
      });

    return () => {
      isMounted = false;
    };
  }, [listOfCategories]);

  // Passo 3: man mano che ricevo i meals, li aggiungo a allRecipe
  useEffect(() => {
    setAllRecipe([...allRecipe, ...meals]);
  }, [meals]);

  // Passo 4: una volta ricevuti tutte le ricette, raccolgo tutti gli id in un array
  useEffect(() => {
    if (allRecipe.length === 283) {
      setAllMealsId(allRecipe.map((recipe) => recipe.idMeal));
    }
  }, [allRecipe]);

  // Passo 5: faccio la fetch di tutti i dettagli dei singoli meals
  useEffect(() => {
    let isMounted = true;

    allMealsId.forEach((id) => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((r) => r.json())
        .then((r) => {
          if (isMounted) {
            setDetails(r.meals[0]);
          }
        })
        .catch((e) => console.log("Error: " + e));
    });

    return () => {
      isMounted = false;
    };
  }, [allMealsId]);

  // Passo 6: man mano che arrivano i details viene costruito allRecipeComplete
  useEffect(() => {
    if (details) setAllRecipeComplete([...allRecipeComplete, { ...details }]);
  }, [details]);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
