import { FormEvent, useState } from "react";
import { Modal } from "../modal/modal";
import styles from "./modalAddress.module.scss";
import { Textfield } from "../textfield/textfield";
import { IAddressForm, IconType, ModalType } from "../../utils/types";
import { useDispatch } from "../../services/store";
import { postOrder } from "../../services/thunk/order";
import { useSelector } from "react-redux";
import {
  clearBasket,
  selectProductList,
  selectTotalSum,
} from "../../services/slices/basket";
import clsx from "clsx";
import { openModal } from "../../services/slices/modal";
import { Button } from "../button/button";
import { Svg } from "../svg/svg";

function ModalAddress() {
  const [formData, setFormData] = useState<IAddressForm>({
    name: "",
    tel: "",
    address: "",
  });
  const isButtonDisabled = Object.values(formData).some((item) => item === "");

  const dispatch = useDispatch();
  const basket = useSelector(selectProductList);
  const totalSum = useSelector(selectTotalSum);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      postOrder({
        productList: basket,
        totalSum: totalSum,
        name: formData.name,
        tel: formData.tel,
        address: formData.address,
      })
    )
      .then(() => {
        dispatch(openModal(ModalType.Success));
      })
      .catch(() => {
        dispatch(openModal(ModalType.Failed));
      })
      .finally(() => {
        dispatch(clearBasket());
      });
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button content={<Svg type={IconType.Back} />} transparent />
          <h3 className={styles.header__title}>Информация о доставке</h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Textfield
            name="name"
            label="Имя"
            formData={formData}
            setFormData={setFormData}
          />
          <Textfield
            name="tel"
            label="Телефон"
            onlyNumbers
            formData={formData}
            setFormData={setFormData}
          />
          <Textfield
            name="address"
            label="Адрес"
            formData={formData}
            setFormData={setFormData}
          />
          <Button
            content={"Оформить заказ"}
            additionalClasses={clsx(
              styles.button,
              isButtonDisabled && styles.button_disabled
            )}
            disabled={isButtonDisabled}
            paddingInline={12}
            paddingBlock={8}
          />
        </form>
      </div>
    </Modal>
  );
}

export { ModalAddress };
