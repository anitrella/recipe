import React from "react";
import style from "./Documentazione.module.css";
import { Container, Table, Row, Col } from "reactstrap";
import strutturaImmagine from "../../assets/images/cartella.png";

function Documentazione() {
  return (
    <div>
      <div
        className={`d-flex flex-row align-items-center justify-content-center ${style.heroimage}`}
      >
        <div className={`d-inline text-center ${style.x} px-5`}>
          <h1 className={`display-1 ${style.h1}`}>Documentazione</h1>
          <p className={`lead ${style.h3}`}>Come è stato progettato il sito</p>
        </div>
      </div>

      <Container className="pt-5 d-flex flex-column align-items-center">
        <Row className="justify-content-center">
          <Col className="col-md-8">
            <h2 className="text-center">Struttura delle cartelle</h2>
            <p className="text-center">
              L'applicazione contiene 4 cartelle di base:
            </p>
            <ul>
              <li>
                <strong>assets</strong>: contiene tutte le immagini e le icone
                usate nell'app
              </li>
              <li>
                <strong>components</strong>: contiene le otto componenti
                dell'app
                <ul>
                  <li>Category Card</li>
                  <li>Category Grid</li>
                  <li>Footer</li>
                  <li>Header</li>
                  <li>Main Template</li>
                  <li>Ricetta Card</li>
                  <li>Ricetta Grid</li>
                  <li>Table</li>
                </ul>
              </li>
              <li>
                <strong>utility</strong>: che comprende la funzione per
                renderizzare un'immagine di default quando il sito non carica
                correttamente la pagina
              </li>
              <li>
                <strong>views</strong>: include le 6 views che costituiscono il
                sito
                <ul>
                  <li>Categorie</li>
                  <li>Documentazione</li>

                  <li>Home</li>
                  <li>Ricetta dettaglio</li>
                  <li>Ricette per categoria</li>
                  <li>Ricette tutte</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={strutturaImmagine} alt="screen struttura cartelle" />
          </Col>
        </Row>
      </Container>

      <Container className="pt-5 d-flex flex-column align-items-center">
        <div className="container p-5">
          <h2 className="text-center">Componenti</h2>
          <p className="text-center mb-4">
            WorldWideFood è costruita attraverso 7 componenti di base
          </p>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
              <Table responsive borderless striped size="sm" className="">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Chiamato da</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MainTemplate</td>
                    <td>App.js</td>
                  </tr>
                  <tr>
                    <td>Header</td>
                    <td>MainTemplate</td>
                  </tr>
                  <tr>
                    <td>Footer</td>
                    <td>MainTemplate</td>
                  </tr>
                  <tr>
                    <td>CategoryGrid</td>
                    <td>Categorie</td>
                  </tr>
                  <tr>
                    <td>CategoryCard</td>
                    <td>CategoryGrid</td>
                  </tr>
                  <tr>
                    <td>Table</td>
                    <td>RicettePerCategoria</td>
                  </tr>
                  <tr>
                    <td>RicettaGrid</td>
                    <td>RicettePerCategoria, RicetteTutte</td>
                  </tr>
                  <tr>
                    <td>RicettaCard</td>
                    <td>RicettaGrid, Home</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-5 d-flex flex-column align-items-center col-md-8">
        <h2>API chiamate</h2>
        <p>
          Le API da cui sono state tratte le informazioni del sito sono tutte
          tratte da
          <a href="https://www.themealdb.com/api.php"> Free Meal API</a>:
        </p>
        <ol>
          <li>
            <a href="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772">
              Full meal details by id
            </a>
            : per i dati su area di provenienza, gli ingredienti, la ricetta e
            la fotografia di ogni pasto proposto
          </li>
          <li>
            <a href="https://www.themealdb.com/api/json/v1/1/random.php">
              Random meal
            </a>
            : per mostrare una ricetta casuale e di ispirazione nella Home
          </li>
          <li>
            <a href="https://www.themealdb.com/api/json/v1/1/categories.php">
              List all meal categories
            </a>
            : per creare la pagina di tutte le categorie, con le ricette
            associate
          </li>
        </ol>
      </Container>
    </div>
  );
}

export default Documentazione;
