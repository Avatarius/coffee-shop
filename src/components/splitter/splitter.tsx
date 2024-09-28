import { forwardRef } from "react";
import styles from "./splitter.module.scss";

interface ISplitterProps {
  text: string;
}

const Splitter = forwardRef<HTMLHeadingElement, ISplitterProps>(
  ({ text }, ref) => {
    return (
      <h2 className={styles.title} ref={ref}>
        {text}
      </h2>
    );
  }
);

export { Splitter };
