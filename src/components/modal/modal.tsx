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
import { IconType } from "../../utils/types";
import { Icon } from "../icon/icon";

const modalRoot = document.getElementById("modal");

interface IModalProps {
  children?: ReactNode;
  padding?: number;
}

function Modal({ children, padding }: IModalProps) {
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
        style={{padding: (padding !== undefined)  ? padding : 30}}
        ref={modalRef}
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        {children}
        <Icon type={IconType.Close} onClick={() => dispatch(closeModal())} additionalClasses={styles.button}/>
      </div>
      <div className={styles.overlay}></div>
    </div>,
    modalRoot!
  );
}

export { Modal };
export type { IModalProps };
