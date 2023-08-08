import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import style from "./RicettaCard.module.css";
import { foodDefaultImage } from "../../utility/utility";

function RicettaCard({ meal, area }) {
  return (
    <Card className={style.card}>
      <CardImg
        onError={(event) => foodDefaultImage(event)}
        className={style.image}
        top-width="100%"
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
      />
      <CardBody className="text-center">
        <CardTitle tag="h5" className={`text-wrap text-primary ${style.title}`}>
          {meal?.strMeal}
        </CardTitle>
        {area && <CardText className={style.subtitle}>{area}</CardText>}
      </CardBody>
    </Card>
  );
}

export default RicettaCard;
