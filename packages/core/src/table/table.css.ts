import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const tableContainer = style({
  position: "relative",
  width: "100%",
  overflowX: "auto",
});

export const table = style({
  width: "100%",
  captionSide: "bottom",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  borderCollapse: "collapse",
});

export const thead = style({});

globalStyle(`${thead} tr`, {
  borderBottom: `1px solid ${vars.color.border}`,
});

export const tbody = style({});

globalStyle(`${tbody} tr:last-child`, {
  borderBottom: "none",
});

export const tfoot = style({
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: `color-mix(in srgb, ${vars.color.muted} 50%, transparent)`,
  fontWeight: 500,
});

globalStyle(`${tfoot} > tr:last-child`, {
  borderBottom: "none",
});

export const tr = style({
  borderBottom: `1px solid ${vars.color.border}`,
  transition: "background-color 0.15s ease",

  selectors: {
    "&:hover": {
      backgroundColor: `color-mix(in srgb, ${vars.color.muted} 50%, transparent)`,
    },
    "&:has([aria-expanded='true'])": {
      backgroundColor: `color-mix(in srgb, ${vars.color.muted} 50%, transparent)`,
    },
    "&[data-state='selected']": {
      backgroundColor: vars.color.muted,
    },
  },
});

export const th = style({
  height: "3rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  textAlign: "left",
  verticalAlign: "middle",
  fontWeight: 500,
  whiteSpace: "nowrap",
  color: vars.color.foreground,

  selectors: {
    "&:has([role='checkbox'])": {
      paddingRight: 0,
    },
  },
});

export const td = style({
  padding: "0.75rem",
  verticalAlign: "middle",
  whiteSpace: "nowrap",

  selectors: {
    "&:has([role='checkbox'])": {
      paddingRight: 0,
    },
  },
});

export const caption = style({
  marginTop: "1rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  color: vars.color.mutedForeground,
});
