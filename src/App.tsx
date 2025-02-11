import "./index.css";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import Router from "~pages/Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
