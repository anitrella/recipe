import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import { NavLink, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import RicettaCard from "../../components/RicettaCard/RicettaCard";

function Home() {
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
    <Container className="m-5">
      <Row className="text-center mb-4 align-items-center">
        <Col>
          <p>Loremipsum shit porco ciao ciao</p>
          <div>
            <Button
              className={`text-center m-1 text-nowrap ${style.btnhome}`}
              onClick={changeMealHandler}
            >
              Lasciati ispirare
            </Button>

            <NavLink to="/ricette">
              <Button
                className={`text-center m-1 text-nowrap ${style.btnhome}`}
              >
                Scopri tutte le ricette
              </Button>
            </NavLink>
          </div>
        </Col>
        <Col>
          <RicettaCard
            className="text-center"
            name={randomApi && randomApi.strMeal}
            idMeal={randomApi && randomApi.idMeal}
            image={randomApi && randomApi.strMealThumb}
          ></RicettaCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
