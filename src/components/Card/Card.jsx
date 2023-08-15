import React from "react";
import {
  Card as BootstrapCard,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import style from "./Card.module.css";
import { foodDefaultImage } from "../../utility/utility";

function Card({ img, title, subtitle, className, variant }) {
  return (
    <BootstrapCard className={`${style.card} ${className}`}>
      <CardImg
        onError={(event) => foodDefaultImage(event)}
        className={style.image}
        top-width="100%"
        src={img}
        alt={title}
      />
      <CardBody className="text-center">
        <CardTitle
          tag="h5"
          className={`text-wrap text-primary ${style.title} ${
            variant === "withBlackHeading" ? "heading-1" : ""
          }`}
        >
          {title}
        </CardTitle>
        {subtitle && <CardText className={style.subtitle}>{subtitle}</CardText>}
      </CardBody>
    </BootstrapCard>
  );
}

export default Card;
