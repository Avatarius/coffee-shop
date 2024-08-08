import { Modal } from "../modal/modal";
import { IModalProps } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { IProduct } from "../../utils/types";

type IModalProductProps = IModalProps & IProduct;

function ModalProduct({
  modalData,
  setModalData,
  name,
  cost,
  volume,
  description,
}: IModalProductProps) {
  return (
    <Modal modalData={modalData} setModalData={setModalData}>
      <div className={styles.container}>
        <img src={coffee} alt="Изображение товара" className={styles.img} />
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.volume}>{volume} мл</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <p className={styles.cost}>{cost} р</p>
          <button className={styles.button}>+</button>
        </div>
      </div>
    </Modal>
  );
}

export { ModalProduct };
