import styles from './textfield.module.scss';

interface ITextfieldProps {
  label: string;
  name: string;
}

function Textfield({label, name}: ITextfieldProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type="text" name={name} id={name} className={styles.input}/>
    </div>
  );
}


export {Textfield};
