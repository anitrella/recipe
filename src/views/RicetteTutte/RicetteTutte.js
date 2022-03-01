import React, { useState, useEffect } from "react";
import RicettaGrid from "../../components/RicettaGrid/RicettaGrid";
import { Container, Row, Col } from "reactstrap";
import style from "./RicetteTutte.module.css";

function RicetteTutte() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [listOfCategories, setListOfCategories] = useState();
  const [meals, setMeals] = useState([]);
  //In questa useEffect chiamo l'api per avere la lista dei nomi di tutte le categorie
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

  useEffect(() => {
    console.log("all recipe è ");
    console.log(allRecipe);
  }, [allRecipe]);

  //In questa useEffect faccio una chiamata API per avere i meals per ogni categorie
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

  useEffect(() => {
    setAllRecipe([...allRecipe, ...meals]);
  }, [meals]);

  return (
    <Container>
      <Row>
        <h3 className="my-5 text-center">Tutte le ricette</h3>
      </Row>
      <Row>
        <Col>
          {allRecipe.length !== 0 && (
            <RicettaGrid
              recipesList={allRecipe}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RicetteTutte;
