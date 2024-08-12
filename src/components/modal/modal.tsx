import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import clsx from "clsx";
import {
  ReactNode,
  useRef,
} from "react";
import { useDispatch } from "../../services/store";
import {
  closeModal,
  selectIsVisible,
} from "../../services/slices/modal";
import { useSelector } from "react-redux";

const modalRoot = document.getElementById("modal");

interface IModalProps {
  children?: ReactNode;
}

function Modal({ children }: IModalProps) {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectIsVisible);
  const modalRef = useRef<HTMLDivElement>(null);
  return ReactDOM.createPortal(
    <div
      className={clsx({
        [styles.container]: true,
        [styles.container_open]: isVisible,
      })}
      onClick={() => dispatch(closeModal())}
    >
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        {children}
        <button
          className={styles.button}
          onClick={() => dispatch(closeModal())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-0.5 0 25 25"
          >
            <g
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="m3 21.32 18-18M3 3.32l18 18" />
            </g>
          </svg>
        </button>
      </div>
      <div className={styles.overlay}></div>
    </div>,
    modalRoot!
  );
}

export { Modal };
export type { IModalProps };
