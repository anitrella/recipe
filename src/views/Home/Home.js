import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "reactstrap";
import RicettaCard from "../../components/RicettaCard/RicettaCard";

function Home(props) {
  const [randomApi, setRandomApi] = useState();

  const fetchMeal = async (changeMeal) => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const meal = data.meals[0];
    changeMeal(meal);
  };

  const changeMealHandler = () => {
    fetchMeal(setRandomApi);
  };

  useEffect(() => {
    fetchMeal(setRandomApi);
  }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   return () => {
  //     isMounted = false;
  //     setClicked();
  //   };
  // }, []);

  // useEffect(() => {
  //   let isMounted = true;

  //   fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //     .then((r) => r.json())
  //     .then((r) => {
  //       if (isMounted) {
  //         setRandomApi(r.meals[0]);
  //       }
  //     });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div>
      <div
        className={`d-flex flex-row align-items-center justify-content-center ${style.heroimage}`}
      >
        <div className={`d-inline text-center ${style.x} px-5`}>
          <h1 className={style.h1}>World Wide Food</h1>
          <p className={`lead ${style.h3}`}>
            Il sito che esplora i confini dei sapori
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
            <RicettaCard
              className="text-center"
              area={randomApi && randomApi.strArea}
              name={randomApi && randomApi.strMeal}
              idMeal={randomApi && randomApi.idMeal}
              image={randomApi && randomApi.strMealThumb}
            ></RicettaCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
