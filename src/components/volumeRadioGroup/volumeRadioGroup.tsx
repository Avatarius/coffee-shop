import styles from "./volumeRadioGroup.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectCurrentProduct, setCurrentProductVolume } from "../../services/slices/products";
import clsx from "clsx";

interface IVolumeRadioGroupProps {
  range: number[];
}

function VolumeRadioGroup({ range }: IVolumeRadioGroupProps) {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectCurrentProduct);

  function handleButtonClick(volume: number) {
    dispatch(setCurrentProductVolume(volume));
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Объем</h4>
      <div className={styles.button__container}>
        {range.map((item) => (
          <button
            className={clsx({
              [styles.button]: true,
              [styles.button_active]: currentProduct?.volume === item,
            })}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export { VolumeRadioGroup };
