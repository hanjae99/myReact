import React from "react";
import { GiAcorn, GiAce } from "react-icons/gi";
import styles from "./CheckBox.module.css";

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <div className={styles.CheckBox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}>
          {checked ? <GiAcorn className={styles.checked} /> : <GiAce />}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
