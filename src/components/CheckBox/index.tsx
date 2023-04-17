import { Check } from 'phosphor-react';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './CheckBox.module.css';

interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
}

export const CheckBox = ({ isChecked, ...props }: CheckBoxProps) => {
  return (
    <div className={styles.checkbox}>
      <button
        {...props}
        className={isChecked ? styles.unchecked : styles.checked}
        title="Alterar status do todo"
        type="button"
      >
        <Check />
      </button>
    </div>
  );
};
