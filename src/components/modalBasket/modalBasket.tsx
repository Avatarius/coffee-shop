import { Modal } from "../modal/modal";
import styles from "./modalBasket.module.scss";
import { useSelector } from "../../services/store";
import {
  selectProductList,
  selectTotalSum,
} from "../../services/slices/basket";
import { BasketItem } from "../basketItem/basketItem";

function ModalBasket() {
  const basket = useSelector(selectProductList);

  return (
    <Modal>
      <div className={styles.container}>
        <ul className={styles.list}>
          {basket.map((item) => (
            <BasketItem item={item} />
          ))}
        </ul>
        <p className={styles.totalPrice}>
          Общая стоимость: {useSelector(selectTotalSum)}р
        </p>
        <button className={styles.button}>Далее</button>
      </div>
    </Modal>
  );
}

export { ModalBasket };
