import React from 'react';

import styles from './Counter.module.css';

interface CounterProps {
  value: number;
  total?: number;
  isTotalCount?: boolean;
}

export const Counter = ({
  value,
  total,
  isTotalCount = false,
}: CounterProps) => {
  return (
    <div className={styles.counterContainer}>
      {isTotalCount ? (
        <strong>{value}</strong>
      ) : (
        <strong>{`${value} de ${total}`}</strong>
      )}
    </div>
  );
};
