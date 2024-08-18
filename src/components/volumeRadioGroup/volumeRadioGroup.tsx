import { useState } from "react";
import styles from "./volumeRadioGroup.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectCurrentVolume, setVolume } from "../../services/slices/products";
import clsx from "clsx";

function VolumeRadioGroup() {
  const dispatch = useDispatch();
  const currentVolume = useSelector(selectCurrentVolume);

  function getButtonClasses(volume: number) {
    return clsx({[styles.button]: true, [styles.button_active]: currentVolume === volume});
  }


  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Объем</h4>
      <div className={styles.button__container}>
        <button className={getButtonClasses(200)} onClick={() => dispatch(setVolume(200))}>200</button>
        <button className={getButtonClasses(300)} onClick={() => dispatch(setVolume(300))}>300</button>
        <button className={getButtonClasses(400)} onClick={() => dispatch(setVolume(400))}>400</button>
        <button className={getButtonClasses(500)} onClick={() => dispatch(setVolume(500))}>500</button>
      </div>
    </div>
  );
}

export { VolumeRadioGroup };
