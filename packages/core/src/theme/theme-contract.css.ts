import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    primaryForeground: null,
    secondary: null,
    secondaryForeground: null,
    destructive: null,
    muted: null,
    mutedForeground: null,
    foreground: null,
    background: null,
    border: null,
    input: null,
    ring: null,
  },
  font: {
    body: null,
  },
  radius: {
    button: null,
  },
});
