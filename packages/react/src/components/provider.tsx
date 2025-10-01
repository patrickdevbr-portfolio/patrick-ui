import * as styles from "@patrick-ui/core/theme/default.css";
import type { PropsWithChildren } from "react";

export function PatrickUIProvider(props: PropsWithChildren) {
  return <div className={styles.defaultTheme}>{props.children}</div>;
}
