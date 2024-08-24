import styles from "./volumeRadioGroup.module.scss";
import clsx from "clsx";

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
          <button
            className={clsx({
              [styles.button]: true,
              [styles.button_active]: volume === item,
            })}
            onClick={() => {
              if (onClick) onClick(item);
            }}
            key={crypto.randomUUID()}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export { VolumeRadioGroup };
