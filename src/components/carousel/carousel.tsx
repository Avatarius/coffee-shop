import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import styles from "./carousel.module.scss";
import clsx from "clsx";

interface ICarouselProps {
  cards: ReactNode[];
}

function Carousel({ cards }: ICarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [transition, setTransition] = useState(true);
  const listItems = cards.map((card) => (
    <li
      className={styles.item}
      onTransitionEnd={() => console.log('END')
      }
      style={{
        translate: `calc((-100% - 20px) * ${currentIndex}`,
        transition: transition ? "translate 0.2s linear" : "none",
      }}
    >
      {card}
    </li>
  ));


  if (currentIndex === cards.length + 1) {
    // setCurrentIndex(1);


  }
  if (currentIndex === -1 ) {
    // setCurrentIndex(cards.length - 1);
  }

  function handleSlide(direction: boolean) {
    // true направо, false налево
    if (direction) {
      setCurrentIndex((prev) => prev - 1);
    } else {
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
        <ul className={styles.list}>
          {[
            listItems.at(-2),
            listItems.at(-1),
            ...listItems,
            listItems.at(0),
            listItems.at(1),
          ]}
        </ul>
      </div>
    </section>
  );
}

export { Carousel };
