import React from "react";
import style from "./Info.module.css";
import { Container } from "reactstrap";

function Info() {
  return (
    <div>
      <div
        className={`d-flex flex-row align-items-center justify-content-center ${style.heroimage}`}
      >
        <div className={`d-inline text-center ${style.x} px-5`}>
          <h1 className={`${style.h1}`}>Documentazione</h1>
          <p className={`lead ${style.h3}`}>Come è stato progettato il sito</p>
        </div>
      </div>

      <Container className="mb-5">
        <h2>Struttura delle cartelle</h2>
        <p>L'applicazione contiene 3 cartelle di base:</p>
        <ul>
          <li>
            <strong>assets</strong>: contiene tutte le immagini e le icone usate
            nell'app
          </li>
          <li>
            <strong>components</strong>: contiene le otto componenti dell'app
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
            <strong>views</strong>: include le 6 views che costituiscono il sito
            <ul>
              <li>Categorie</li>
              <li>Home</li>
              <li>Info</li>
              <li>Ricetta Dettagli</li>
              <li>Ricette per categoria</li>
              <li>Ricette tutte</li>
            </ul>
          </li>
        </ul>
      </Container>

      <Container className="mb-5">
        <h2>I componenti</h2>
        <p>Le API di cui ci siamo seriviti sono:</p>
      </Container>

      <Container className="mb-5">
        <h2>API chiamate</h2>
        <p>Le API di cui ci siamo seriviti sono:</p>
      </Container>
    </div>
  );
}

export default Info;
