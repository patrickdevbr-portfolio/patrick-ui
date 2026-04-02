import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const datatableWrapper = style({
  overflow: "hidden",
  borderRadius: "0.5rem",
  border: `1px solid ${vars.color.border}`,
});

export const emptyCell = style({
  height: "6rem",
  textAlign: "center",
});
