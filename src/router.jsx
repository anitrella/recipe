import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Categorie from "views/Categorie/Categorie";
import Documentazione from "views/Documentazione/Documentazione";
import RicettaDettaglio from "views/RicettaDettaglio/RicettaDettaglio";
import RicettePerCategoria from "views/RicettePerCategoria/RicettePerCategoria";
import App from "./App";
import RicetteTutte from "views/RicetteTutte/RicetteTutte";
import Home from "views/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "categorie",
        element: <Categorie />,
      },
      {
        path: ":cat",
        element: <RicettePerCategoria />,
      },
      {
        path: "ricette",
        element: <RicetteTutte />,
      },
      {
        path: "ricette/:number",
        element: <RicettaDettaglio />,
      },
      {
        path: "documentazione",
        element: <Documentazione />,
      },
    ],
  },
]);
