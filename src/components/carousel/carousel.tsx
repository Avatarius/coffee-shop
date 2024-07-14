import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import styles from "./carousel.module.scss";
import clsx from "clsx";

interface ICarouselProps {
  cards: ReactNode[];
}

function Carousel({ cards }: ICarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [transition, setTransition] = useState(true);

  const listItems = [
    cards.at(-2),
    cards.at(-1),
    ...cards,
    cards.at(0),
    cards.at(1),
  ].map((card, index) => (
    <li
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
      <button
        className={clsx({ [styles.button]: true, [styles.button_left]: true })}
        onClick={() => handleSlide(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          fill="currentColor"
        >
          <path d="M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
        </svg>
      </button>
      <button
        className={clsx({ [styles.button]: true, [styles.button_right]: true })}
        onClick={() => handleSlide(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(-1 1)"
          viewBox="0 0 1024 1024"
          fill="currentColor"
        >
          <path d="M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z" />
        </svg>
      </button>
      <div className={styles.slider}>
        <ul
          className={styles.list}
          style={{
            translate: `calc(-33.9% * ${currentIndex}) 0`,
            transition: transition ? "translate 0.2s linear" : "none",
          }}
        >
          {listItems}
        </ul>
      </div>
    </section>
  );
}

export { Carousel };
