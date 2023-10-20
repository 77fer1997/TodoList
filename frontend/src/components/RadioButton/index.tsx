import { FC } from "react";
import styles from "./style.module.css";

interface IProps {
  id: string;
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
}
export const RadioButton: FC<IProps> = ({ id, label, checked, setChecked }) => {
  console.log("hola");
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        value={`${checked}`}
        onChange={() => setChecked(!checked)}
        name={id}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
