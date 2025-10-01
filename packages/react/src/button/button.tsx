import * as styles from "@patrick-ui/core/button/button.css";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={styles.button({ primary: true })} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "PatrickUIButton";
