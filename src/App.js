import React from "react";
import MainTemplate from "./components/MainTemplate/MainTemplate";

import Home from "./views/Home/Home.js";
import Categorie from "./views/Categorie/Categorie";
import Info from "./views/Info/Info";
import RicettaDettaglio from "./views/RicettaDettaglio/RicettaDettaglio";
import RicettePerCategoria from "./views/RicettePerCategoria/RicettePerCategoria";
import RicetteTutte from "./views/RicetteTutte/RicetteTutte";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./assets/images/logo.png";

function App() {
  const nav = [
    { url: "/", text: "Home" },
    { url: "/categorie", text: "Categorie" },
    { url: "/ricette", text: "Ricette" },
    { url: "/info", text: "Info" },
  ];

  return (
    <BrowserRouter>
      <MainTemplate
        footerCourseName="Tecnologie e Applicazioni dei Sistemi Distribuiti"
        footerCourseLink="https://elearning.unimib.it/course/view.php?id=31277"
        navItems={nav}
        logo={Logo}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/:cat" element={<RicettePerCategoria />} />
          <Route path="/ricette" element={<RicetteTutte />} />

          <Route path="/ricette/:number" element={<RicettaDettaglio />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
