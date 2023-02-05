const noscript = document.getElementById("noscript");
noscript && document.body.removeChild(noscript);

import React from "react";
import ReactDOM from "react-dom/client";
import { Terminal } from "./components/Terminal";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Terminal />
  </React.StrictMode>,
);