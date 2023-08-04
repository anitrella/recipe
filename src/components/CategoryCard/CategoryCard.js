import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import style from "./CategoryCard.module.css";
import { foodDefaultImage } from "../../utility/utility";

function CategoryCard(props) {
  const { name, image } = props;

  return (
    <Card className={style.card}>
      <CardImg
        onError={(event) => foodDefaultImage(event)}
        className={style.image}
        top-width="100%"
        src={image}
        alt={name}
      />
      <CardBody className="text-center">
        <CardTitle tag="h5" className={`text-primary ${style.title}`}>
          {name}
        </CardTitle>
      </CardBody>
    </Card>
  );
}
export default CategoryCard;
