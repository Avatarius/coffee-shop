import { IconType } from "../../utils/types";
import { iconData } from "../../utils/constants";
import styles from "./icon.module.scss";
import clsx from "clsx";
import { ReactNode } from "react";

interface IIconProps {
  type: IconType;
  onClick?: () => void;
  additionalClasses?: string;
  children?: ReactNode;
}

function Icon(props: IIconProps) {
  const {type, onClick, additionalClasses, children} = props;
  const { path, viewBox, size } = iconData[type];
  const classList = additionalClasses ? clsx(styles.button, additionalClasses) : styles.button;

  function handleClick() {
    if (onClick) onClick();
  }

  return (
    <button
      className={classList}
      style={{ inlineSize: size, blockSize: size }}
      onClick={handleClick}
    >
      {children}
      <svg viewBox={viewBox} width={size} fill="#fff">
        {path}
      </svg>
    </button>
  );
}

export { Icon };
