import { useEffect, useState } from "react";
import styles from './counter.module.scss';

interface ICounterProps {
  onClick?: (count: number) => void;
}

function Counter({onClick}: ICounterProps) {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (onClick) {
      onClick(counter);
    }
  }, [counter])
  return (
    <div className={styles.container}>
      <button onClick={() => {
        setCounter(currentValue => currentValue !== 1 ? currentValue - 1 : 1);
      }} className={styles.button}>-</button>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(currentValue => currentValue + 1);
      }} className={styles.button}>+</button>
    </div>
  )
}

export {Counter};
