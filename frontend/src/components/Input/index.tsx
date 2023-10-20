import React, { InputHTMLAttributes } from "react";
import styles from "./style.module.css";
export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};
