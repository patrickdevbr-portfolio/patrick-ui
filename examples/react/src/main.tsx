import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@patrick-ui/react/styles.css";
import "@fontsource/geist-mono";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
