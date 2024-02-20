import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Weather />, rootElement);
