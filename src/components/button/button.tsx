import clsx from "clsx";
import styles from "./button.module.scss";
import { ReactNode } from "react";

interface IButtonProps {
  content?: ReactNode;
  onClick?: () => void;
  additionalClasses?: string;
  disabled?: boolean;
}

function Button({
  content,
  onClick,
  additionalClasses,
  disabled,
}: IButtonProps) {
  function handleClick() {
    if (!onClick) return;
    onClick();
  }

  return (
    <button
      className={
        additionalClasses
          ? clsx(styles.container, additionalClasses)
          : styles.container
      }
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export { Button };
