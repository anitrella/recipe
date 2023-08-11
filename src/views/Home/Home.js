import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Card from "../../components/Card/Card";

function Home(props) {
  const [randomApi, setRandomApi] = useState();

  //Costruisco la funzione che prende un random meal
  const fetchMeal = async (changeMeal) => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const meal = data.meals[0];
    changeMeal(meal);
  };

  // Costruisco la funzione che associa il click del bottone "Lasciati ispirare" alla comparsa di un random meal
  const changeMealHandler = () => {
    fetchMeal(setRandomApi);
  };

  // Faccio sì che il l'API del random meal venga chiamata al caricamento della pagina
  useEffect(() => {
    fetchMeal(setRandomApi);
  }, []);

  return (
    <div>
      <div
        className={`d-flex flex-row justify-content-center pt-5 ${style.heroimage}`}
      >
        <div className={`d-inline text-center px-5 m-5 pt-5`}>
          <h1 className={`display-1 ${style.h1}`}>World Wide Food</h1>
          <p className={`lead ${style.h3}`}>
            Esplora i confini dei tuoi sapori
          </p>
        </div>
      </div>
      <Container className="m-sm-5 my-5">
        <Row className="text-center my-4 align-items-center">
          <Col sm>
            <p className="text-start">
              Vuoi stupire gli ospiti con piatti ricercati? Ami esplorare nuovi
              sapori? In World Wide Food troverai{" "}
              <strong>centinaia di ricette</strong> da tutto il mondo. Mettiti
              il grembiule e comincia!
            </p>
            <div>
              <Button
                className={`text-center m-1 text-nowrap ${style.btnhome}`}
                onClick={changeMealHandler}
              >
                Lasciati ispirare
              </Button>
              <NavLink to="/ricette">
                <Button
                  className={`text-center m-3 text-nowrap ${style.btnhome}`}
                >
                  Scopri tutte le ricette
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col sm>
            <NavLink to={`/ricette/${randomApi?.idMeal}`}>
              <Card
                className="text-center"
                subtitle={randomApi?.strArea}
                img={randomApi?.strMealThumb}
                title={randomApi?.strMeal}
                variant="withBlackHeading"
              />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
