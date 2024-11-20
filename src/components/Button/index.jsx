import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./styles.module.scss";

export default function Button({ to, className, children, size, ...props }) {
  const css = clsx(styles.btn, size && styles[`btn-${size}`], className);
  const Component = to ? Link : "button";
  const ComponentProps = {
    className: css,
    ...(to && { to }),
    ...(Component === "button" && { type: "button" }),
    ...props,
  };

  return <Component {...ComponentProps}>{children}</Component>;
}
