import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import clsx from "clsx";
import { ReactNode, useRef } from "react";
import { useDispatch } from "../../services/store";
import { closeModal, selectIsVisible } from "../../services/slices/modal";
import { useSelector } from "react-redux";
import { IconType } from "../../utils/types";
import { Button } from "../button/button";
import { Svg } from "../svg/svg";

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
        style={{ padding: padding !== undefined ? padding : 30 }}
        ref={modalRef}
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        {children}
        <Button
          content={<Svg type={IconType.Close} />}
          onClick={() => dispatch(closeModal())}
          additionalClasses={styles.button}
          paddingInline={0}
          paddingBlock={0}
          transparent
        />
      </div>
      <div className={styles.overlay}></div>
    </div>,
    modalRoot!
  );
}

export { Modal };
export type { IModalProps };
