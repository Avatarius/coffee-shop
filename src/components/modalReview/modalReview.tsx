import { IModalProps, Modal } from "../modal/modal";
import userAvatar from '../../images/user.jpg';
import styles from './modalReview.module.scss';
import { IReview } from "../../utils/types";

type IModalReviewProps = IModalProps & IReview;

function ModalReview(props: IModalReviewProps) {
  const { modalData, setModalData, name, text } = props;
  return (
    <Modal modalData={modalData} setModalData={setModalData}>
      <div className={styles.container}>
        <img src={userAvatar} alt="Аватар пользователя" className={styles.img}/>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{text}</p>
      </div>
    </Modal>
  );
}

export { ModalReview };
