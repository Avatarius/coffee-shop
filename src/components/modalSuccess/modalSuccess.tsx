import { Modal } from "../modal/modal";
import { Icon } from "../icon/icon";
import { IconType } from "../../utils/types";
import styles from './modalSuccess.module.scss';

function ModalSuccess() {
  return (
    <Modal>
      <div className={styles.container}>
        <Icon type={IconType.Success} additionalClasses={styles.icon}/>
        <p className={styles.text}>Заказ оформлен</p>
      </div>
    </Modal>
  );
}

export {ModalSuccess};
