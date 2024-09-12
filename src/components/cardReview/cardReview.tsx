import styles from "./cardReview.module.scss";
import user from "../../images/user.jpg";
import { Image } from "../image/image";

interface ICardReviewProps {
  name: string;
  text: string;
  image: string;
  onClick: () => void;
}

function CardReview(props: ICardReviewProps) {
  const { name, text, image, onClick } = props;
  return (
    <article className={styles.container} onClick={onClick}>
      <Image
        src={image}
        alt={name}
        fallbackSrc={user}
        className={styles.img}
      />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export { CardReview };
