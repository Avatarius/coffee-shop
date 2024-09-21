import { Modal } from "../modal/modal";
import styles from './modalSuccess.module.scss';

function ModalSuccess() {
  return (
    <Modal>
      <div className={styles.container}>
        <p className={styles.text}>Заказ оформлен</p>
      </div>
    </Modal>
  );
}

export {ModalSuccess};
