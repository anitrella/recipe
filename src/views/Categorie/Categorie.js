import React, { useState, useEffect } from "react";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import { Container, Row, Col } from "reactstrap";

function Categorie() {
  const [allCategories, setAllCategories] = useState();

  // Costruisco la chiamata API per visualizzare le categorie
  useEffect(() => {
    let isMounted = true;

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((r) => r.json())
      .then((r) => {
        if (isMounted) {
          setAllCategories(r.categories);
        }
      })
      .catch((error) => console.log("Error" + error));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container className="mb-5">
      <Row>
        <h3 className="my-5 text-center text-primary">
          Esplora le ricette per categoria
        </h3>
      </Row>
      <Row>
        <Col>
          {allCategories && (
            <CategoryGrid
              categories={allCategories}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Categorie;
