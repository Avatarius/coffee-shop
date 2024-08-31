import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styles from './textfield.module.scss';
import { log } from 'console';
import { IAddressForm } from '../../utils/types';

interface ITextfieldProps {
  formData: IAddressForm;
  setFormData: Dispatch<SetStateAction<IAddressForm>>;
  label: string;
  name: keyof IAddressForm;
  onlyNumbers?: boolean;
}

function Textfield(props: ITextfieldProps) {
  const {formData, setFormData, label, name, onlyNumbers} = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const {value, name} = e.target;
    if (onlyNumbers && !/^\d+$/.test(value)) {
      return;
    }
    setFormData((prevData) => ({...prevData, [name]: value}));
  }

  return (
    <div>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type="text" name={name} id={name} className={styles.input} value={formData[name]} onChange={handleChange}/>
    </div>
  );
}


export {Textfield};
