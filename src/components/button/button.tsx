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
  transparent?: boolean;
}

function Button(props: IButtonProps) {
  const {
    content,
    onClick,
    additionalClasses,
    disabled,
    paddingInline,
    paddingBlock,
    transparent,
  } = props;

  const classList = clsx(
    styles.container,
    additionalClasses && additionalClasses,
    transparent && styles.container_transparent
  );

  const paddingX = paddingInline ?? 0;
  const paddingY = paddingBlock ?? 0;

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className={classList}
      style={{
        padding: `${paddingY}px ${paddingX}px`,
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export { Button };
