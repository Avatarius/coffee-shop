import { ReactNode, useState } from "react";
import styles from "./carousel.module.scss";
import clsx from "clsx";
import { IconType } from "../../utils/types";
import { Button } from "../button/button";
import { Svg } from "../svg/svg";

interface ICarouselProps {
  cards: ReactNode[];
  cardWidth: number;
  gap: number;
}
function Carousel(props: ICarouselProps) {
  const { cards, cardWidth, gap } = props;
  const [currentIndex, setCurrentIndex] = useState(2);
  const [transition, setTransition] = useState(true);

  const containerSize = cardWidth * 3 + gap * 4;
  const translateValue = (-cardWidth - gap) * currentIndex;

  const listItems = [
    cards.at(-2),
    cards.at(-1),
    ...cards,
    cards.at(0),
    cards.at(1),
  ].map((card, index) => (
    <li
      key={index}
      className={clsx({
        [styles.item]: true,
        [styles.item_active]:
          index === currentIndex + 1 ||
          index === currentIndex - (cards.length - 1) ||
          index === currentIndex + (cards.length + 1),
      })}
    >
      {card}
    </li>
  ));

  function slideWithoutTransition(index: number) {
    return new Promise((resolve) => {
      setTransition(false);
      setCurrentIndex(index);
      setTimeout(() => {
        setTransition(true);
        resolve("");
      }, 0);
    });
  }

  async function handleSlide(direction: boolean) {
    // true направо, false налево
    if (direction) {
      if (currentIndex === 0) {
        await slideWithoutTransition(cards.length);
      }
      setCurrentIndex((prev) => prev - 1);
    } else {
      if (currentIndex === cards.length) {
        await slideWithoutTransition(0);
      }
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.slider__container}
        style={{ inlineSize: containerSize + 100 }}
      >
        <Button
          content={<Svg type={IconType.LeftArrow} />}
          onClick={() => handleSlide(true)}
          additionalClasses={clsx(styles.button, styles.button_left)}
          transparent
        />
        <Button
          content={<Svg type={IconType.RightArrow} />}
          onClick={() => handleSlide(false)}
          additionalClasses={clsx(styles.button, styles.button_right)}
          transparent
        />
        <div
          className={styles.slider}
          style={{ inlineSize: `calc(100% - 100px)` }}
        >
          <ul
            className={styles.list}
            style={{
              translate: translateValue,
              transition: transition ? "translate 0.2s linear" : "none",
              gap: gap,
            }}
          >
            {listItems}
          </ul>
        </div>
      </div>
    </section>
  );
}

export { Carousel };
