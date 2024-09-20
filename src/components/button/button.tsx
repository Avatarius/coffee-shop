import clsx from "clsx";
import styles from "./button.module.scss";
import { ReactNode } from "react";
import { IconType } from "../../utils/types";

interface IButtonProps {
  content?: ReactNode | IconType;
  onClick?: () => void;
  additionalClasses?: string;
  disabled?: boolean;
  paddingInline?: number;
  paddingBlock?: number;
}

function Button(props: IButtonProps) {
  const {
    content,
    onClick,
    additionalClasses,
    disabled,
    paddingInline,
    paddingBlock,
  } = props;

  const paddingX = paddingInline ?? 8;
  const paddingY = paddingBlock ?? 12;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className={
        additionalClasses
          ? clsx(styles.container, additionalClasses)
          : styles.container
      }
      style={{ padding: `${paddingY}px ${paddingX}px` }}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export { Button };
