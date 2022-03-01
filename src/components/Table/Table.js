import React from "react";
import style from "./Table.module.css";
import { NavLink } from "react-router-dom";

function Table(props) {
  const { recipesList } = props;
  const RecipeTr = recipesList.map((recipe) => {
    return (
      <tr key={recipe.strMeal}>
        <td>{recipe.strMeal}</td>
        <td>
          <img
            className={style.image}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            loading="lazy"
          />
        </td>
        <td>
          <NavLink className={style.action} to={`/ricette/${recipe.idMeal}`}>
            Vai alla scheda
          </NavLink>
        </td>
      </tr>
    );
  });
  return (
    <div className="text-center">
      <table className="table text-center">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">{RecipeTr}</tbody>
      </table>
    </div>
  );
}

export default Table;