import { Modal } from "../modal/modal";
import styles from "./modalBasket.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import {
  selectProductList,
  selectTotalSum,
} from "../../services/slices/basket";
import { BasketItem } from "../basketItem/basketItem";
import { openModal, selectModalType } from "../../services/slices/modal";
import { ModalType } from "../../utils/types";

function ModalBasket() {
  const basket = useSelector(selectProductList);
  const dispatch = useDispatch();

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
        <button className={styles.button} onClick={() => dispatch(openModal(ModalType.Address))}>Далее</button>
      </div>
    </Modal>
  );
}

export { ModalBasket };
