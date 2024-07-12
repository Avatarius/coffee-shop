import styles from "./cardReview.module.scss";
import user from "../../images/user.jpg";

interface ICardReviewProps {
  name: string;
  text: string;
}

function CardReview(props: ICardReviewProps) {
  const {name, text} = props;
  return (
    <article className={styles.container}>
      <img src={user} alt="Аватарка пользователя" className={styles.img} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>
        {text}
      </p>
    </article>
  );
}

export { CardReview };
