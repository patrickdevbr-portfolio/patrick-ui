// import { vars } from "@patrick-ui/core/theme/theme-contract.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    cursor: "pointer",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    transition: "transform .08s ease, box-shadow .12s ease, background-color .12s ease",
    borderRadius: ".375rem",
    background: "linear-gradient(-180deg, rgba(255, 255, 255, 0.09) 0%, rgba(17, 17, 17, 0.04) 100%)",
    border: "1px solid rgba(22, 22, 22, 0.4)",
    padding: "1rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",


    selectors: {
      "&:hover": {
        background: "linear-gradient(-180deg, rgba(255, 255, 255, 0.18) 0%, rgba(17, 17, 17, 0.08) 100%)"
      },
      "&:active": {
        transform: "translateY(0)",
        filter: "brightness(.96)"
      },
      "&:focus": {
        outline: "none",
      },

      "&:disabled": {
        color: "rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(0, 0, 0, 0.025)",
        borderColor: "rgb(232, 232, 232)"
      }
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
