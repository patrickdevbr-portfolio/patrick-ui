import { createTheme, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme-contract.css";

export const defaultTheme = createTheme(vars, {
  color: {
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    secondary: "oklch(0.97 0 0)",
    secondaryForeground: "oklch(0.205 0 0)",
    destructive: "oklch(0.577 0.245 27.325)",
    muted: "oklch(0.97 0 0)",
    mutedForeground: "oklch(0.556 0 0)",
    foreground: "oklch(0.145 0 0)",
    background: "oklch(1 0 0)",
    border: "oklch(0.922 0 0)",
    input: "oklch(0.922 0 0)",
    ring: "oklch(0.708 0 0)",
  },
  font: {
    body: "'Geist Mono', 'Geist Fallback', system-ui, sans-serif",
  },
  radius: {
    button: "0",
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: "oklch(0.985 0 0)",
    primaryForeground: "oklch(0.205 0 0)",
    secondary: "oklch(0.269 0 0)",
    secondaryForeground: "oklch(0.985 0 0)",
    destructive: "oklch(0.396 0.141 25.723)",
    muted: "oklch(0.269 0 0)",
    mutedForeground: "oklch(0.708 0 0)",
    foreground: "oklch(0.985 0 0)",
    background: "oklch(0.145 0 0)",
    border: "oklch(0.269 0 0)",
    input: "oklch(0.269 0 0)",
    ring: "oklch(0.439 0 0)",
  },
  font: {
    body: "'Geist Mono', 'Geist Fallback', system-ui, sans-serif",
  },
  radius: {
    button: "0",
  },
});

globalStyle(`.${defaultTheme}, .${darkTheme}`, {
  fontFamily: vars.font.body,
});
