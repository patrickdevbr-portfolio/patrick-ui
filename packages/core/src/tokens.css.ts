import { createGlobalTheme } from "@vanilla-extract/css";

export const rootVars = createGlobalTheme(":root", {
  color: {
    blue: "blue",
    red: "red",
    green: "green",
  },
});
