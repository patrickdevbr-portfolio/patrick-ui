import type { ButtonVariants } from "@patrick-ui/core/button/button.css";
import * as styles from "@patrick-ui/core/button/button.css";

import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react/button";

export type ButtonProps = BaseButtonProps & ButtonVariants;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <BaseButton className={styles.button({ variant, size })} {...props}>
      {children}
    </BaseButton>
  );
};

Button.displayName = "PatrickUIButton";
