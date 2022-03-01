import React, { useState, useEffect } from "react";
import RicettaGrid from "../../components/RicettaGrid/RicettaGrid";
import { Container, Row, Col } from "reactstrap";
import style from "./RicetteTutte.module.css";

function RicetteTutte(props) {
  const { allRecipe } = props;

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
