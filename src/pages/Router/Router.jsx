import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import ProjectContainer from "./../../components/ProjectContainer/ProjectContainer";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<ProjectContainer />}></Route>
    </Routes>
  );
}

export default Router;
