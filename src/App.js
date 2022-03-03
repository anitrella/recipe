import React, { useState, useEffect } from "react";
import MainTemplate from "./components/MainTemplate/MainTemplate";

import Home from "./views/Home/Home.js";
import Categorie from "./views/Categorie/Categorie";
import Info from "./views/Info/Info";
import RicettaDettaglio from "./views/RicettaDettaglio/RicettaDettaglio";
import RicettePerCategoria from "./views/RicettePerCategoria/RicettePerCategoria";
import RicetteTutte from "./views/RicetteTutte/RicetteTutte";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./assets/images/logo.png";

function App() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [listOfCategories, setListOfCategories] = useState();
  const [meals, setMeals] = useState([]);
  const [allMealsId, setAllMealsId] = useState([]);
  const [details, setDetails] = useState();
  const [allRecipeComplete, setAllRecipeComplete] = useState([]);

  //Passo 1: In questa useEffect chiamo l'api per avere la lista dei nomi di tutte le categorie
  useEffect(() => {
    let isMounted = true;

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php
    `)
      .then((r) => r.json())
      .then((r) => {
        if (isMounted) {
          const catNames = r.categories.map((category) => category.strCategory);
          setListOfCategories(catNames);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
          });
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
    console.log("all recipe è ");
    console.log(allRecipe);

    if (allRecipe.length === 283) {
      setAllMealsId(allRecipe.map((recipe) => recipe.idMeal));
    }
  }, [allRecipe]);

  // Passo 5: faccio la fetch di tutti i dettagli dei singoli meals
  useEffect(() => {
    console.log("allMealsId è ");
    console.log(allMealsId);

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

  // console.log allRecipeComplete
  useEffect(() => {
    console.log("allRecipeComplete è ");
    console.log(allRecipeComplete);
  }, [allRecipeComplete]);

  const nav = [
    { url: "/", text: "Home" },
    { url: "/categorie", text: "Categorie" },
    { url: "/ricette", text: "Ricette" },
    { url: "/info", text: "Documentazione" },
  ];

  return (
    <BrowserRouter>
      <MainTemplate
        footerCourseName="Tecnologie e Applicazioni dei Sistemi Distribuiti"
        footerCourseLink="https://elearning.unimib.it/course/view.php?id=31277"
        navItems={nav}
        logo={Logo}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/:cat" element={<RicettePerCategoria />} />
          <Route
            path="/ricette"
            element={
              <RicetteTutte
                allRecipe={allRecipe}
                allRecipeComplete={allRecipeComplete}
              />
            }
          />

          <Route path="/ricette/:number" element={<RicettaDettaglio />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
