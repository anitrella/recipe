import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import style from "./RicettaDettaglio.module.css";

function RicettaDettaglio(props) {
  const [details, setDetails] = useState();

  const params = useParams();
  const id = params.number;

  // const currentMeal = allRecipe.filter((el) => el.idMeal === id)

  useEffect(() => {
    let isMounted = true;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => r.json())
      .then((r) => {
        if (isMounted) {
          setDetails(r.meals[0]);
        }
      })
      .catch((e) => console.log("Error: " + e));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container className="my-4 d-flex flex-column align-items-center">
      <h2 className="text-center mt-2 mb-3">
        {details && `${details.strMeal}`}
      </h2>
      <p>{details && details.strCategory}</p>

      <img src={details && details.strMealThumb} className="mb-5" />
      <p className="mb-5">Area: {details && details.strArea}</p>

      <h5 className="mb-3">Ingredients:</h5>

      <span>
        {details &&
          details.strIngredient1 &&
          `${details.strIngredient1}: ${details.strMeasure1}`}
      </span>
      <span>
        {details &&
          details.strIngredient2 &&
          `${details.strIngredient2}: ${details.strMeasure2}`}
      </span>
      <span>
        {details &&
          details.strIngredient3 &&
          `${details.strIngredient3}: ${details.strMeasure3}`}
      </span>
      <span>
        {details &&
          details.strIngredient4 &&
          `${details.strIngredient4}: ${details.strMeasure4}`}
      </span>
      <span>
        {details &&
          details.strIngredient5 &&
          `${details.strIngredient5}: ${details.strMeasure5}`}
      </span>
      <span>
        {details &&
          details.strIngredient6 &&
          `${details.strIngredient6}: ${details.strMeasure6}`}
      </span>
      <span>
        {details &&
          details.strIngredient7 &&
          `${details.strIngredient7}: ${details.strMeasure7}`}
      </span>
      <span>
        {details &&
          details.strIngredient8 &&
          `${details.strIngredient8}: ${details.strMeasure8}`}
      </span>
      <span>
        {details &&
          details.strIngredient9 &&
          `${details.strIngredient9}: ${details.strMeasure9}`}
      </span>
      <span>
        {details &&
          details.strIngredient10 &&
          `${details.strIngredient10}: ${details.strMeasure10}`}
      </span>
      <span>
        {details &&
          details.strIngredient11 &&
          `${details.strIngredient11}: ${details.strMeasure11}`}
      </span>
      <span>
        {details &&
          details.strIngredient12 &&
          `${details.strIngredient12}: ${details.strMeasure12}`}
      </span>
      <span>
        {details &&
          details.strIngredient13 &&
          `${details.strIngredient13}: ${details.strMeasure13}`}
      </span>
      <span>
        {details &&
          details.strIngredient14 &&
          `${details.strIngredient14}: ${details.strMeasure14}`}
      </span>
      <span>
        {details &&
          details.strIngredient15 &&
          `${details.strIngredient15}: ${details.strMeasure15}`}
      </span>
      <span>
        {details &&
          details.strIngredient16 &&
          `${details.strIngredient16}: ${details.strMeasure16}`}
      </span>
      <span>
        {details &&
          details.strIngredient17 &&
          `${details.strIngredient17}: ${details.strMeasure17}`}
      </span>
      <span>
        {details &&
          details.strIngredient18 &&
          `${details.strIngredient18}: ${details.strMeasure18}`}
      </span>
      <span>
        {details &&
          details.strIngredient19 &&
          `${details.strIngredient19}: ${details.strMeasure19}`}
      </span>
      <span className="mb-5">
        {details &&
          details.strIngredient20 &&
          `${details.strIngredient20}: ${details.strMeasure20}`}
      </span>
      <h5 className="mb-3">Procedure:</h5>
      <p className={`mx-3 ${style.procedure}`}>
        {details && details.strInstructions}
      </p>
    </Container>
  );
}

export default RicettaDettaglio;
