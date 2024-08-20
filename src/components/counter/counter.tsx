import { useState } from "react";
import styles from './counter.module.scss';

interface ICounterProps {
  onClick?: () => void;
}

function Counter({onClick}: ICounterProps) {
  const [counter, setCounter] = useState(1);

  return (
    <div className={styles.container}>
      <button onClick={() => {
        setCounter(currentValue => currentValue !== 1 ? currentValue - 1 : 1);
        if (onClick) onClick();
      }} className={styles.button}>-</button>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(currentValue => currentValue + 1);
        if (onClick) onClick();
      }} className={styles.button}>+</button>
    </div>
  )
}

export {Counter};
