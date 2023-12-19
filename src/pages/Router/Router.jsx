import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  );
}

export default Router;
