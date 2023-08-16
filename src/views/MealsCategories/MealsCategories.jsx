import React from "react";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { Container, Row, Col } from "reactstrap";
import { useGetMealsCategories } from "queries/useGetMealsCategories";

function MealsCategories() {
  const { mealsCategories } = useGetMealsCategories();

  return (
    <Container className="mb-5">
      <Row>
        <h3 className="my-5 text-center text-primary">
          Esplora le ricette per categoria
        </h3>
      </Row>
      <Row>
        <Col>
          {mealsCategories && (
            <CategoryGrid
              categories={mealsCategories}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default MealsCategories;
