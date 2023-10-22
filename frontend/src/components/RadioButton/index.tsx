import { FC } from "react";
import styles from "./style.module.css";

interface IProps {
  id: string;
  label: string;
  checked: boolean;
  setChecked: () => void;
}
export const RadioButton: FC<IProps> = ({ id, label, checked, setChecked }) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        value={`${checked}`}
        checked={checked}
        onChange={() => setChecked()}
        name={id}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
