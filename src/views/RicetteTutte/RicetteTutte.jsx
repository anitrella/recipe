import React, { useState, useEffect } from "react";
import RicettaGrid from "../../components/RicettaGrid/RicettaGrid";
import {
  Container,
  Input,
  Form,
  FormGroup,
  Label,
  Collapse,
  Button,
  Row,
  Col,
  Spinner,
  Card,
} from "reactstrap";
import style from "./RicetteTutte.module.css";
import { useGetMealsCategoriesNames } from "queries/useGetMealsCategoriesNames";
import { getMealDetails, getMealsByCategoryName } from "services/meals";

function RicetteTutte() {
  const [allAreas, setAllAreas] = useState();
  const [activeFilter, setActiveFilter] = useState([]);
  const [recipeFiltered, setRecipeFiltered] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [allRecipe, setAllRecipe] = useState([]);
  const [meals, setMeals] = useState([]);
  const [allMealsId, setAllMealsId] = useState([]);
  const [details, setDetails] = useState();
  const [allRecipeComplete, setAllRecipeComplete] = useState([]);

  //Passo 1: In questa useEffect chiamo l'api per avere la lista dei nomi di tutte le categorie
  const { listOfCategories } = useGetMealsCategoriesNames();

  //Passo 2: In questa useEffect faccio una chiamata API per avere i meals per ogni categorie
  useEffect(() => {
    let isMounted = true;

    if (listOfCategories)
      listOfCategories.forEach((category) => {
        getMealsByCategoryName(category).then((meals) => {
          if (isMounted) {
            setMeals(meals);
          }
        });
      });

    return () => {
      isMounted = false;
    };
  }, [listOfCategories]);

  // Passo 3: man mano che ricevo i meals, li aggiungo a allRecipe
  useEffect(() => {
    setAllRecipe([...allRecipe, ...meals]);
  }, [meals]);

  // Passo 4: una volta ricevuti tutte le ricette, raccolgo tutti gli id in un array
  useEffect(() => {
    if (allRecipe.length === 283) {
      setAllMealsId(allRecipe.map((recipe) => recipe.idMeal));
    }
  }, [allRecipe]);

  // Passo 5: faccio la fetch di tutti i dettagli dei singoli meals
  useEffect(() => {
    let isMounted = true;

    allMealsId.forEach((id) => {
      getMealDetails(id).then((details) => {
        if (isMounted) {
          setDetails(details);
        }
      });
    });

    return () => {
      isMounted = false;
    };
  }, [allMealsId]);

  // Passo 6: man mano che arrivano i details viene costruito allRecipeComplete
  useEffect(() => {
    if (details) setAllRecipeComplete([...allRecipeComplete, { ...details }]);
  }, [details]);

  // Imposto la funzione per cambiare il filtro per l'area geografica inserita
  const changeFilter = (item) => {
    let newFilter = activeFilter.slice();
    let indexArea = newFilter.indexOf(item);
    if (indexArea !== -1) {
      newFilter.splice(indexArea, 1);
    } else {
      newFilter.push(item);
    }
    setActiveFilter(newFilter);
  };

  // Estraggo tutte le aree geografiche e le salvo in allAreas
  useEffect(() => {
    if (allRecipeComplete.length === 283) {
      const areas = allRecipeComplete.map((recipe) => recipe.strArea);
      let areasNoDouble = new Set(areas);
      areasNoDouble = [...areasNoDouble];
      const areaAdjusted = areasNoDouble.filter((el) => el !== "Unknown");
      setAllAreas(areaAdjusted);
    }
  }, [allRecipeComplete]);

  // Filtro solo le ricette che provengono dall'area geografica specificata
  useEffect(() => {
    setRecipeFiltered(
      allRecipeComplete.filter((recipe) =>
        activeFilter.includes(recipe.strArea)
      )
    );
  }, [activeFilter]);

  // Creo il toggle per visualizzare i filtri
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="mb-5">
      <Row>
        <h3 className="my-5 text-center text-primary">Tutte le ricette</h3>
      </Row>

      <div>
        <Button onClick={toggle} className={style.buttonFiltri}>
          Filtri per area
        </Button>
        <Collapse isOpen={isOpen}>
          <Card className="p-3 mb-3">
            {allRecipeComplete.length < 283 && (
              <div className="d-flex align-items-center">
                <Spinner className="me-3">Loading...</Spinner>
                <span>Attendi un momento, stiamo cucinando per te...</span>
              </div>
            )}
            <Form>
              {allAreas &&
                allAreas.map((area, index) => {
                  return (
                    <FormGroup check inline key={index}>
                      <Input
                        className={style.casella}
                        type="checkbox"
                        onClick={() => changeFilter(area)}
                      />
                      <Label check>{area}</Label>
                    </FormGroup>
                  );
                })}
            </Form>
          </Card>
        </Collapse>
      </div>
      <Row>
        <Col>
          {allRecipe.length !== 0 && (
            <RicettaGrid
              recipesList={
                recipeFiltered.length === 0 ? allRecipe : recipeFiltered
              }
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RicetteTutte;
