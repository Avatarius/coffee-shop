import { FormEvent } from "react";
import { Modal } from "../modal/modal";
import styles from "./modalAddress.module.scss";
import { Textfield } from "../textfield/textfield";
import { Icon } from "../icon/icon";
import { IconType } from "../../utils/types";

function ModalAddress() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <Icon type={IconType.Back} />
          <h3 className={styles.header__title}>Информация о доставке</h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Textfield name="name" label="Имя" />
          <Textfield name="phone" label="Телефон" onlyNumbers />
          <Textfield name="address" label="Адрес" />
          <button type="submit" className={styles.button}>
            Оформить заказ
          </button>
        </form>
      </div>
    </Modal>
  );
}

export { ModalAddress };
