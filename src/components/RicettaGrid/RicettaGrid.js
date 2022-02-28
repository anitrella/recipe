import React from "react";
import RicettaCard from "../RicettaCard/RicettaCard";

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
            <RicettaCard
              // className="width-100 height-328"
              key={recipe.idMeal}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
              idMeal={recipe.idMeal}
            />
          );
        })}
    </div>
  );
}

export default RicettaGrid;
