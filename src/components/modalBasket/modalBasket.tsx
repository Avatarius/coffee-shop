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
import clsx from "clsx";
import { Button } from "../button/button";

function ModalBasket() {
  const basket = useSelector(selectProductList);
  const dispatch = useDispatch();
  const isButtonDisabled = basket.length === 0;

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
        <Button
          content={"Далее"}
          additionalClasses={clsx(
            styles.button,
            isButtonDisabled && styles.button_disabled
          )}
          onClick={() => dispatch(openModal(ModalType.Address))}
          disabled={isButtonDisabled}
          paddingInline={12}
          paddingBlock={8}
        />
      </div>
    </Modal>
  );
}

export { ModalBasket };
