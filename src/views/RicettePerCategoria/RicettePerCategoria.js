import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import style from "./RicettePerCategoria.module.css";
import Table from "../../components/Table/Table";
import { useParams } from "react-router-dom";
import RicettaGrid from "../../components/RicettaGrid/RicettaGrid";

function RicettePerCategoria() {
  const params = useParams();
  const cat = params.cat;

  const [displayGrid, setDisplayGrid] = useState(true);
  const [recipesList, setRecipesList] = useState();

  // Chiamo l'Api per ottenere i dati dei pasti divisi per categoria
  useEffect(() => {
    let isMounted = true;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((r) => r.json())
      .then((r) => {
        if (isMounted) {
          setRecipesList(r.meals);
        }
      })
      .catch((e) => console.log("Error: " + e));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className={style.switch}>
            <div
              className={`${style.option} ${displayGrid ? style.active : ""}`}
              onClick={() => setDisplayGrid(true)}
            >
              Grid
            </div>
            <div
              className={`${style.option} ${!displayGrid ? style.active : ""}`}
              onClick={() => setDisplayGrid(false)}
            >
              Table
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          {displayGrid ? (
            <RicettaGrid
              recipesList={recipesList}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          ) : (
            <Table recipesList={recipesList} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RicettePerCategoria;
