import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import style from "./CategoryCard.module.css";
import { foodDefaultImage } from "../../utility/utility";

function CategoryCard({ category }) {
  return (
    <Card className={style.card}>
      <CardImg
        onError={(event) => foodDefaultImage(event)}
        className={style.image}
        top-width="100%"
        src={category?.strCategoryThumb}
        alt={category?.strCategory}
      />
      <CardBody className="text-center">
        <CardTitle tag="h5" className={`text-primary ${style.title}`}>
          {category?.strCategory}
        </CardTitle>
      </CardBody>
    </Card>
  );
}
export default CategoryCard;
