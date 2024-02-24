import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./styles/globalStyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
