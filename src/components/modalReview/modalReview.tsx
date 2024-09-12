import { IModalProps, Modal } from "../modal/modal";
import userAvatar from "../../images/user.jpg";
import styles from "./modalReview.module.scss";
import { IReview } from "../../utils/types";
import { Image } from "../image/image";
import { useSelector } from "react-redux";
import { selectCurrentReview } from "../../services/slices/reviews";

function ModalReview() {
  const currentReview = useSelector(selectCurrentReview);
  if (!currentReview) return;
  const { name, text, image } = currentReview;
  return (
    <Modal>
      <div className={styles.container}>
        <Image
          src={image}
          alt={name}
          fallbackSrc={userAvatar}
          className={styles.img}
        />
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{text}</p>
      </div>
    </Modal>
  );
}

export { ModalReview };
