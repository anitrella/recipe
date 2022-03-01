import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import style from "./RicettaCard.module.css";
import { NavLink } from "react-router-dom";

function RicettaCard(props) {
  const { name, idMeal, image } = props;

  return (
    <NavLink to={`/ricette/${idMeal}`}>
      <Card className={style.card}>
        <CardImg
          className={style.image}
          top-width="100%"
          src={image}
          alt={name}
        />
        <CardBody className="text-center">
          <CardTitle tag="h5" className={`text-wrap ${style.title}`}>
            {name}
          </CardTitle>
        </CardBody>
      </Card>
    </NavLink>
  );
}

export default RicettaCard;