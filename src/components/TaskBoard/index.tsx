import { ClipboardText } from 'phosphor-react';
import React from 'react';

import { TaskData } from '../../App';
import { Counter } from '../Counter';
import { Task } from '../Task';
import styles from './TaskBoard.module.css';

interface TaskBoardProps {
  tasks: TaskData[];
  onChangeStatusTask: (task: TaskData) => void;
  onDeleteTask: (task: TaskData) => void;
}

export const TaskBoard = ({
  tasks,
  onChangeStatusTask,
  onDeleteTask,
}: TaskBoardProps) => {
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.taskContainer}>
      <div className={styles.header}>
        <div className={styles.headerColumn}>
          <strong className={styles.createdTasksCount}>Tarefas criadas</strong>
          <Counter value={tasks.length} isTotalCount />
        </div>

        <div className={styles.headerColumn}>
          <strong className={styles.completedTasksCount}>Concluídas</strong>
          {tasks.length === 0 ? (
            <Counter value={tasks.length} isTotalCount />
          ) : (
            <Counter value={completedTasks} total={tasks.length} />
          )}
        </div>
      </div>

      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onChangeStatusTask={onChangeStatusTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <div className={styles.emptyList}>
            <ClipboardText />

            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
