import { useState } from "react";
import styles from './counter.module.scss';

function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <div className={styles.container}>
      <button onClick={() => setCounter(currentValue => currentValue !== 0 ? currentValue - 1 : 0)} className={styles.button}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(currentValue => currentValue + 1)} className={styles.button}>+</button>
    </div>
  )
}

export {Counter};
