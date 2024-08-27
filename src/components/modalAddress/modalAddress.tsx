import { FormEvent } from "react";
import { Modal } from "../modal/modal";
import styles from './modalAddress.module.scss';
import { Textfield } from "../textfield/textfield";

function ModalAddress() {

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Modal>
      <div className={styles.container}>
        <h3 className={styles.title}>Информация о доставке</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Textfield name="name" label="Имя"/>
          <Textfield name="phone" label="Телефон"/>
          <Textfield name="address" label="Адрес"/>
          <button type="submit" className={styles.button}>Оформить заказ</button>
        </form>
      </div>
    </Modal>
  );
}

export {ModalAddress};
