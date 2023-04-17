import { PlusCircle } from 'phosphor-react';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './CreateButton.module.css';

type CreateButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CreateButton = ({ ...props }: CreateButtonProps) => {
  return (
    <div className={styles.createButton}>
      <button {...props} type="submit" title="Criar todo">
        Criar
        <PlusCircle />
      </button>
    </div>
  );
};
