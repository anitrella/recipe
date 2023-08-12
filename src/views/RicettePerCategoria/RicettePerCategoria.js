import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import style from "./RicettePerCategoria.module.css";
import Table from "../../components/Table/Table";
import { useParams } from "react-router-dom";
import RicettaGrid from "../../components/RicettaGrid/RicettaGrid";
import { useGetMealsByCategoryName } from "../../queries/useGetMealsByCategoryName";

function RicettePerCategoria() {
  const { cat } = useParams();
  const { recipesList } = useGetMealsByCategoryName(cat);
  const [displayGrid, setDisplayGrid] = useState(true);

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
