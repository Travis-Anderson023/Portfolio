import React from "react";
import "./App.css";
import { Appli } from "./pages/Appli";
import { Home } from "./pages/Home";
import { LinkedIn } from "./pages/LinkedIn";
import LinkTree from "./pages/LinkTree";
import { LolStats } from "./pages/LolStats";
import { MedicationTracker } from "./pages/MedicationTracker";
import { Sarabot } from "./pages/Sarabot";
import { Technologies } from "./pages/Technologies";
import Pagify from "./react-mui-pagify/Pagify/index";

export const App = () => {
  return (
    //click to auto scroll to section
    //css star background
    <Pagify>
      <Home />
      <LinkedIn />
      <Technologies />
      <Sarabot />
      <LolStats />
      <MedicationTracker />
      <Appli />
      <LinkTree />
    </Pagify>
  );
};
