import { ChangeEvent, useState } from 'react';
import styles from './textfield.module.scss';
import { log } from 'console';

interface ITextfieldProps {
  label: string;
  name: string;
  onlyNumbers?: boolean;
}

function Textfield({label, name, onlyNumbers}: ITextfieldProps) {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {value} = e.target;
    if (onlyNumbers && !/^\d+$/.test(value)) {
      e.preventDefault();
    } else {
      setValue(value);
    }

  }

  return (
    <div>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type="text" name={name} id={name} className={styles.input} value={value} onChange={handleChange}/>
    </div>
  );
}


export {Textfield};
