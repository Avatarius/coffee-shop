import { FormEvent, useState } from "react";
import { Modal } from "../modal/modal";
import styles from "./modalAddress.module.scss";
import { Textfield } from "../textfield/textfield";
import { Icon } from "../icon/icon";
import { IAddressForm, IconType } from "../../utils/types";
import { useDispatch } from "../../services/store";
import { postOrder } from "../../services/thunk/order";
import { useSelector } from "react-redux";
import {
  selectProductList,
  selectTotalSum,
} from "../../services/slices/basket";
import clsx from "clsx";

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
    );
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <Icon type={IconType.Back} />
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
          <button
            type="submit"
            className={clsx(
              styles.button,
              isButtonDisabled && styles.button_disabled
            )}
            disabled={isButtonDisabled}
          >
            Оформить заказ
          </button>
        </form>
      </div>
    </Modal>
  );
}

export { ModalAddress };
