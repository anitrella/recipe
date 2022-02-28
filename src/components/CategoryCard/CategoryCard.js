import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import style from "./CategoryCard.module.css";
import { NavLink } from "react-router-dom";

function CategoryCard(props) {
  const { name, image } = props;

  return (
    <NavLink to={`/${name}`}>
      <Card className={style.card}>
        <CardImg
          className={style.image}
          top-width="100%"
          src={image}
          alt={name}
        />
        <CardBody className="text-center">
          <CardTitle tag="h5" className={`${style.title}`}>
            {name}
          </CardTitle>
        </CardBody>
      </Card>
    </NavLink>
  );
}
export default CategoryCard;
