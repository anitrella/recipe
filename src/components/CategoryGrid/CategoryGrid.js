import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";

function CategoryGrid(props) {
  const { categories, col } = props;

  return (
    <div
      className={`row 
      row-cols-${col.xs} 
      row-cols-sm-${col.sm} 
      row-cols-md-${col.md} 
      row-cols-lg-${col.lg} 
      row-cols-xl-${col.xl}`}
    >
      {categories.length !== 0 &&
        categories.map((cat, index) => {
          return (
            <NavLink to={`/${cat.strCategory}`}>
              <Card
                key={index}
                img={cat.strCategoryThumb}
                title={cat.strCategory}
                className="mb-4"
              />
            </NavLink>
          );
        })}
    </div>
  );
}

export default CategoryGrid;
