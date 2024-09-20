import { iconData } from "../../utils/constants";
import { IconType } from "../../utils/types";

interface ISvgProps {
  type: IconType;
}

function Svg({ type }: ISvgProps) {
  const { path, viewBox, size } = iconData[type];

  return (
    <svg viewBox={viewBox} width={size} fill="#fff" stroke="#fff">
      {path}
    </svg>
  );
}

export { Svg };
