// import { vars } from "@patrick-ui/core/theme/theme-contract.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "8px 16px",
    backgroundColor: "#fff",
    backgroundImage:
      "linear-gradient(-180deg, rgba(255, 255, 255, 0.09) 0%, rgba(17, 17, 17, 0.04) 100%)",
    border: "1px solid rgba(22, 22, 22, 0.4)",
    color: "#000",

    selectors: {
      "&:hover": {
        backgroundImage:
          "linear-gradient(-180deg, rgba(255, 255, 255, 0.18) 0%, rgba(17, 17, 17, 0.08) 100%)",
        border: "1px solid rgba(22, 22, 22, 0.4)",
        color: "#111",
      },
      "&:disabled": {
        backgroundColor: "#a5b4fc",
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    primary: {
      true: {},
    },
  },

  defaultVariants: {
    primary: true,
  },
});
