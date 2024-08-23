import styles from "./volumeRadioGroup.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectCurrentProduct, setCurrentProductVolume } from "../../services/slices/products";
import clsx from "clsx";
import { selectProductList } from "../../services/slices/basket";
import { isAlreadyInBasket } from "../../utils/utils";

interface IVolumeRadioGroupProps {
  id: string;
  range: number[];
}

function VolumeRadioGroup({ id, range }: IVolumeRadioGroupProps) {
  const dispatch = useDispatch();
  const currentProduct = useSelector(selectCurrentProduct);
  const basket = useSelector(selectProductList);

  function handleButtonClick(volume: number) {
    dispatch(setCurrentProductVolume(volume));
    if (isAlreadyInBasket(basket, id)) {
      // dispatch();
    }
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
