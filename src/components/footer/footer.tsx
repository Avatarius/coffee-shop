import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <Navigation />
      <div>
        <h2 className={styles.title}>Контакты:</h2>
        <address className={styles.address}>
          <p>Адрес: tempus imperdiet nulla malesuada pellentesque elit eget</p>
          <p>Телефон: 111-111-111</p>
          <p>Email: espressoroom@gmail.com</p>
        </address>
      </div>
    </footer>
  );
}

export { Footer };
