import { Button } from "../button/button";
import logo from "../../images/logo.png";
import styles from "./hero.module.scss";
import { Navigation } from "../navigation/navigation";
import { Header } from "../header/header";

function Hero() {
  /* return (
    <section className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_left}>
          <h1 className={styles.title}>Elza Coffee</h1>
          <p className={styles.text}>
            Today's good mood is sponsered by coffee search for your coffee now
          </p>
          <Button text="Shop Now" />
          <Button text="Catalog" />
        </div>
        <div className={styles.main_right}></div>
      </div>
    </section>
  ); */
  /* return (
    <section className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Espresso Room</h1>
        <p className={styles.text}>
          Приглашаем вас окунуться в мир, где кофе не просто напиток — это
          история, которую создаёте вы сами, выбирая из множества вариаций и
          комбинаций. Ваше идеальное место для встреч, разговоров или просто
          мгновений наедине с собой, где каждый сорт кофе рассказывает свою
          историю, начиная с зерна и заканчивая божественным ароматом в вашей
          чашке.
        </p>
      </div>
      <div></div>
    </section>
  ); */
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.info}>
        <h1 className={styles.title}>Espresso Room</h1>
        <p className={styles.text}>
          Приглашаем вас окунуться в мир, где кофе не просто напиток — это
          история, которую создаёте вы сами, выбирая из множества вариаций и
          комбинаций. Ваше идеальное место для встреч, разговоров или просто
          мгновений наедине с собой, где каждый сорт кофе рассказывает свою
          историю, начиная с зерна и заканчивая божественным ароматом в вашей
          чашке.
        </p>
      </div>
    </section>
  );
}

export { Hero };
