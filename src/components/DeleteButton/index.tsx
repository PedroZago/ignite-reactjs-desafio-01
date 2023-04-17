import { Trash } from 'phosphor-react';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './DeleteButton.module.css';

type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const DeleteButton = ({ ...props }: DeleteButtonProps) => {
  return (
    <div className={styles.deleteButton}>
      <button {...props} title="Deletar todo" type="button">
        <Trash />
      </button>
    </div>
  );
};
