import styles from "./volumeRadioGroup.module.scss";
import clsx from "clsx";
import { Button } from "../button/button";

interface IVolumeRadioGroupProps {
  volume: number;
  range: number[];
  onClick?: (volume: number) => void;
}

function VolumeRadioGroup({ volume, range, onClick }: IVolumeRadioGroupProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Объем</h4>
      <div className={styles.button__container}>
        {range.map((item) => (
          <Button
            content={item}
            additionalClasses={clsx({
              [styles.button]: true,
              [styles.button_active]: volume === item,
            })}
            onClick={() => {
              if (onClick) onClick(item);
            }}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export { VolumeRadioGroup };
