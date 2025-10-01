import { vars } from "@patrick-ui/core/theme/theme-contract.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s ease",

    selectors: {
      "&:hover": {
        backgroundColor: "#4338ca", // Indigo mais escuro
      },
      "&:disabled": {
        backgroundColor: "#a5b4fc",
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    primary: {
      true: { backgroundColor: vars.color.brand, color: "#fff" },
    },
  },

  defaultVariants: {
    primary: true,
  },
});
