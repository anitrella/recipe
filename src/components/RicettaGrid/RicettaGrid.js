import React from "react";
import RicettaCard from "../RicettaCard/RicettaCard";
import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";

function RicettaGrid(props) {
  const { recipesList, col } = props;

  return (
    <div
      className={`row 
    row-cols-${col.xs} 
    row-cols-sm-${col.sm} 
    row-cols-md-${col.md} 
    row-cols-lg-${col.lg} 
    row-cols-xl-${col.xl}`}
    >
      {recipesList &&
        recipesList.length !== 0 &&
        recipesList.map((recipe) => {
          return (
            <Col className="mb-3">
              <NavLink to={`/ricette/${recipe.idMeal}`}>
                <RicettaCard key={recipe.idMeal} meal={recipe} />
              </NavLink>
            </Col>
          );
        })}
    </div>
  );
}

export default RicettaGrid;
