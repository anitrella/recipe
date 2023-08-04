import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { NavLink } from "react-router-dom";

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
              <CategoryCard
                key={index}
                name={cat.strCategory}
                image={cat.strCategoryThumb}
                idCategory={cat.idCategory}
              />
            </NavLink>
          );
        })}
    </div>
  );
}

export default CategoryGrid;
