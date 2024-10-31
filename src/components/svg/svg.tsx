import { iconData } from "../../utils/constants";
import { IconType } from "../../utils/types";
import styles from "./svg.module.scss";

interface ISvgProps {
  type: IconType;
  customSize?: number;
}

function Svg({ type, customSize }: ISvgProps) {
  const { path, viewBox, size } = iconData[type];

  return (
    <svg
      viewBox={viewBox}
      width={typeof customSize !== "undefined" ? customSize : size}
      fill="#fff"
      stroke="currentColor"
      className={styles.svg}
    >
      {path}
    </svg>
  );
}

export { Svg };
