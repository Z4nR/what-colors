import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ColorApp from "./App";

import "./styles/main.css";
import "./styles/responsive.css";
import "./styles/modal.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ColorApp />
  </BrowserRouter>
);
