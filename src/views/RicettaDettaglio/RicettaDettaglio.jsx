import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import style from "./RicettaDettaglio.module.css";
import { foodDefaultImage } from "../../utility/utility";

function RicettaDettaglio() {
  const [details, setDetails] = useState();

  const params = useParams();
  const id = params.number;

  // Chiamo l'API per ottenere i dettagli di ogni ricetta (nome, area, geografica, ingredienti, procedimento)
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
    <Container className="my-4 d-flex flex-column align-items-center p-4">
      <h2 className="text-center mt-1 mb-3">
        {details && `${details.strMeal}`}
      </h2>
      <p>{details && details.strCategory}</p>

      <img
        src={details && details.strMealThumb}
        alt={details && details.strMeal}
        className="mb-5"
        onError={(event) => foodDefaultImage(event)}
      />
      <p className="mb-5">Area: {details && details.strArea}</p>

      <h5 className="mb-3">Ingredients:</h5>

      {details && (
        <Row className={`row-cols-3 g-3 mb-5`}>
          {details.strIngredient1 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient1}-Small.png`}
                alt={details.strIngredient1}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient1}: ${details.strMeasure1}`}</span>
            </Col>
          )}
          {details.strIngredient2 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient2}-Small.png`}
                alt={details.strIngredient2}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient2}: ${details.strMeasure2}`}</span>
            </Col>
          )}
          {details.strIngredient3 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient3}-Small.png`}
                alt={details.strIngredient3}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient3}: ${details.strMeasure3}`}</span>
            </Col>
          )}
          {details.strIngredient4 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient4}-Small.png`}
                alt={details.strIngredient4}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient4}: ${details.strMeasure4}`}</span>
            </Col>
          )}
          {details.strIngredient5 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient5}-Small.png`}
                alt={details.strIngredient5}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient5}: ${details.strMeasure5}`}</span>
            </Col>
          )}
          {details.strIngredient6 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient6}-Small.png`}
                alt={details.strIngredient6}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient6}: ${details.strMeasure6}`}</span>
            </Col>
          )}
          {details.strIngredient7 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient7}-Small.png`}
                alt={details.strIngredient7}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient7}: ${details.strMeasure7}`}</span>
            </Col>
          )}
          {details.strIngredient8 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient8}-Small.png`}
                alt={details.strIngredient8}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient8}: ${details.strMeasure8}`}</span>
            </Col>
          )}
          {details.strIngredient9 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient9}-Small.png`}
                alt={details.strIngredient9}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient9}: ${details.strMeasure9}`}</span>
            </Col>
          )}
          {details.strIngredient10 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient10}-Small.png`}
                alt={details.strIngredient10}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient10}: ${details.strMeasure10}`}</span>
            </Col>
          )}
          {details.strIngredient11 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient11}-Small.png`}
                alt={details.strIngredient11}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient11}: ${details.strMeasure11}`}</span>
            </Col>
          )}
          {details.strIngredient12 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient12}-Small.png`}
                alt={details.strIngredient12}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient12}: ${details.strMeasure12}`}</span>
            </Col>
          )}
          {details.strIngredient13 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient13}-Small.png`}
                alt={details.strIngredient13}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient13}: ${details.strMeasure13}`}</span>
            </Col>
          )}
          {details.strIngredient14 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient14}-Small.png`}
                alt={details.strIngredient14}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient14}: ${details.strMeasure14}`}</span>
            </Col>
          )}
          {details.strIngredient15 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient15}-Small.png`}
                alt={details.strIngredient15}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient15}: ${details.strMeasure15}`}</span>
            </Col>
          )}
          {details.strIngredient16 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient16}-Small.png`}
                alt={details.strIngredient16}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient16}: ${details.strMeasure16}`}</span>
            </Col>
          )}
          {details.strIngredient17 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient17}-Small.png`}
                alt={details.strIngredient17}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient17}: ${details.strMeasure17}`}</span>
            </Col>
          )}
          {details.strIngredient18 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient18}-Small.png`}
                alt={details.strIngredient18}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient18}: ${details.strMeasure18}`}</span>
            </Col>
          )}
          {details.strIngredient19 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient19}-Small.png`}
                alt={details.strIngredient19}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient19}: ${details.strMeasure19}`}</span>
            </Col>
          )}
          {details.strIngredient20 && (
            <Col>
              <img
                src={`http://www.themealdb.com/images/ingredients/${details.strIngredient20}-Small.png`}
                alt={details.strIngredient20}
              />
              <span className="d-block d-xl-inline-block">{`${details.strIngredient20}: ${details.strMeasure20}`}</span>
            </Col>
          )}
        </Row>
      )}

      <h5 className="mt-5 mb-3">Procedure:</h5>
      <p className={`mx-3 ${style.procedure}`}>
        {details && details.strInstructions}
      </p>
    </Container>
  );
}

export default RicettaDettaglio;
