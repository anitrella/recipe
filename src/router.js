import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "views/Home/Home.js";
import Categorie from "views/Categorie/Categorie";
import Documentazione from "views/Documentazione/Documentazione";
import RicettaDettaglio from "views/RicettaDettaglio/RicettaDettaglio";
import RicettePerCategoria from "views/RicettePerCategoria/RicettePerCategoria";
import MainLayout from "layout/MainLayout";
// import RicetteTutte from "views/RicetteTutte/RicetteTutte";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      // {
      //   path: "/ricette",
      //   element: <RicetteTutte />,
      // },
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