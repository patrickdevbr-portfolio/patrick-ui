import { globalStyle, style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/theme-contract.css";

const buttonBase = style({
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.button,
  border: "1px solid transparent",
  backgroundClip: "padding-box",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  fontFamily: "inherit",
  fontWeight: 400,
  whiteSpace: "nowrap",
  transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
  outline: "none",
  userSelect: "none",

  selectors: {
    "&:focus-visible": {
      borderColor: vars.color.ring,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.ring} 50%, transparent)`,
    },
    "&:active:not([aria-haspopup])": {
      transform: "translateY(1px)",
    },
    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&[aria-invalid='true']": {
      borderColor: vars.color.destructive,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.destructive} 20%, transparent)`,
    },
  },
});

globalStyle(`${buttonBase} svg`, {
  pointerEvents: "none",
  flexShrink: 0,
});

globalStyle(`${buttonBase} svg:not([class*='size-'])`, {
  width: "1rem",
  height: "1rem",
});

const sizeXsBase = style({});
const sizeIconXsBase = style({});

globalStyle(
  `${sizeXsBase} svg:not([class*='size-']), ${sizeIconXsBase} svg:not([class*='size-'])`,
  { width: "0.75rem", height: "0.75rem" }
);

export const button = recipe({
  base: buttonBase,

  variants: {
    variant: {
      default: {
        background: vars.color.primary,
        color: vars.color.primaryForeground,
        selectors: {
          "&:hover": {
            background: `color-mix(in srgb, ${vars.color.primary} 80%, transparent)`,
          },
        },
      },
      outline: {
        borderColor: vars.color.border,
        background: `color-mix(in srgb, ${vars.color.input} 30%, transparent)`,
        selectors: {
          "&:hover": {
            background: `color-mix(in srgb, ${vars.color.input} 50%, transparent)`,
            color: vars.color.foreground,
          },
          "&[aria-expanded='true']": {
            background: vars.color.muted,
            color: vars.color.foreground,
          },
        },
      },
      secondary: {
        background: vars.color.secondary,
        color: vars.color.secondaryForeground,
        selectors: {
          "&:hover": {
            background: `color-mix(in srgb, ${vars.color.secondary} 80%, transparent)`,
          },
          "&[aria-expanded='true']": {
            background: vars.color.secondary,
            color: vars.color.secondaryForeground,
          },
        },
      },
      ghost: {
        selectors: {
          "&:hover": {
            background: vars.color.muted,
            color: vars.color.foreground,
          },
          "&[aria-expanded='true']": {
            background: vars.color.muted,
            color: vars.color.foreground,
          },
        },
      },
      destructive: {
        background: `color-mix(in srgb, ${vars.color.destructive} 10%, transparent)`,
        color: vars.color.destructive,
        selectors: {
          "&:hover": {
            background: `color-mix(in srgb, ${vars.color.destructive} 20%, transparent)`,
          },
          "&:focus-visible": {
            borderColor: `color-mix(in srgb, ${vars.color.destructive} 40%, transparent)`,
            boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.destructive} 20%, transparent)`,
          },
        },
      },
      link: {
        color: vars.color.primary,
        textUnderlineOffset: "4px",
        selectors: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },

    size: {
      default: {
        height: "2.25rem",
        gap: "0.375rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        selectors: {
          "&:has([data-icon='inline-end'])": { paddingRight: "0.625rem" },
          "&:has([data-icon='inline-start'])": { paddingLeft: "0.625rem" },
        },
      },
      xs: [
        sizeXsBase,
        {
          height: "1.5rem",
          gap: "0.25rem",
          paddingLeft: "0.625rem",
          paddingRight: "0.625rem",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          selectors: {
            "&:has([data-icon='inline-end'])": { paddingRight: "0.5rem" },
            "&:has([data-icon='inline-start'])": { paddingLeft: "0.5rem" },
          },
        },
      ],
      sm: {
        height: "2rem",
        gap: "0.25rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        selectors: {
          "&:has([data-icon='inline-end'])": { paddingRight: "0.5rem" },
          "&:has([data-icon='inline-start'])": { paddingLeft: "0.5rem" },
        },
      },
      lg: {
        height: "2.5rem",
        gap: "0.375rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        selectors: {
          "&:has([data-icon='inline-end'])": { paddingRight: "0.75rem" },
          "&:has([data-icon='inline-start'])": { paddingLeft: "0.75rem" },
        },
      },
      icon: { width: "2.25rem", height: "2.25rem" },
      "icon-xs": [sizeIconXsBase, { width: "1.5rem", height: "1.5rem" }],
      "icon-sm": { width: "2rem", height: "2rem" },
      "icon-lg": { width: "2.5rem", height: "2.5rem" },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
