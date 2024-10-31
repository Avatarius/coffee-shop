import { IconType } from "../../utils/types";
import { Modal } from "../modal/modal";
import { Svg } from "../svg/svg";
import styles from "./modalStatus.module.scss";

interface IModalStatusProps {
  status: boolean;
}

function ModalStatus({ status }: IModalStatusProps) {
  const text = status ? "Заказ оформлен" : "Не удалось оформить заказ";
  const iconType = status ? IconType.Tick : IconType.Close;
  return (
    <Modal>
      <div className={styles.container}>
        <Svg type={iconType} customSize={175} />
        <p className={styles.text}>{text}</p>
      </div>
    </Modal>
  );
}

export { ModalStatus };
