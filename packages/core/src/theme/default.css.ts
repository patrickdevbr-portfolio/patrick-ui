import { createTheme } from "@vanilla-extract/css";
import { vars } from "./theme-contract.css";

export const defaultTheme = createTheme(vars, {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
