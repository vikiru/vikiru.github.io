import "./index.css";

import { HashRouter } from "react-router-dom";
import React from "react";
import Router from "./pages/Router/Router";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
