import React from 'react';

import { TaskData } from '../../App';
import { CheckBox } from '../CheckBox';
import { DeleteButton } from '../DeleteButton';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskData;
  onChangeStatusTask: (task: TaskData) => void;
  onDeleteTask: (task: TaskData) => void;
}

export const Task = ({ task, onChangeStatusTask, onDeleteTask }: TaskProps) => {
  return (
    <article className={styles.taskWrapper}>
      <CheckBox
        isChecked={task.isCompleted}
        onClick={() => onChangeStatusTask(task)}
      />

      <p className={task.isCompleted ? styles.inactiveText : styles.activeText}>
        {task.text}
      </p>

      <DeleteButton onClick={() => onDeleteTask(task)} />
    </article>
  );
};
