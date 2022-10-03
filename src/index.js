import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ColorApp from "./App";

import "./styles/main.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ColorApp />
  </BrowserRouter>
);
