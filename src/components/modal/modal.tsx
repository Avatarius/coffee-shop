import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { IModalData } from "../../utils/types";

const modalRoot = document.getElementById("modal");

interface IModalProps {
  modalData: IModalData;
  setModalData: Dispatch<SetStateAction<IModalData>>;
  children?: ReactNode;
}

function Modal({ modalData, setModalData, children }: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  return ReactDOM.createPortal(
    <div
      className={clsx({
        [styles.container]: true,
        [styles.container_open]: modalData.isVisible,
      })}
      onClick={() => setModalData((prevData) => ({...prevData, isVisible: false}))}
    >
      <div className={styles.modal} ref={modalRef} onClick={(event: React.MouseEvent) => event.stopPropagation()}>
        {children}
        <button className={styles.button} onClick={() => setModalData((prevData) => ({...prevData, isVisible: false}))}>
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
export type {IModalProps};
