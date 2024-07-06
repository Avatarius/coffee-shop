import { Button } from "../button/button";
import styles from "./hero.module.scss";
import { Header } from "../header/header";

function Hero() {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.info}>
        <div>
          <h1 className={styles.title}>Espresso Room</h1>
          <p className={styles.text}>
            Приглашаем вас окунуться в мир, где кофе не просто напиток — это
            история, которую создаёте вы сами, выбирая из множества вариаций и
            комбинаций. Ваше идеальное место для встреч, разговоров или просто
            мгновений наедине с собой, где каждый сорт кофе рассказывает свою
            историю, начиная с зерна и заканчивая божественным ароматом в вашей
            чашке.
          </p>
          <Button text="Заказать"/>
        </div>
      </div>
    </section>
  );
}

export { Hero };
