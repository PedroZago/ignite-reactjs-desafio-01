import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { Header } from './components/Header';
import { TaskBoard } from './components/TaskBoard';

import './global.css';

export type TaskData = {
  id: string;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTask.trim() === '') {
      return alert('Valor inválido');
    }

    setTasks([
      ...tasks,
      { id: uuidv4(), text: newTask.trim(), isCompleted: false },
    ]);
    setNewTask('');
  };

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  const handleChangeStatusTask = (selectedTask: TaskData) => {
    const newTaskList = tasks.map(task => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          isCompleted: !selectedTask.isCompleted,
        };
      } else {
        return task;
      }
    });
    setTasks(newTaskList);
  };

  const handleDeleteTask = (selectedTask: TaskData) => {
    const tasksWithoutDeletedOne = tasks.filter(
      task => task.id !== selectedTask.id
    );
    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <form onSubmit={handleCreateNewTask} className={styles.todoForm}>
            <input
              name="task"
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />

            <CreateButton disabled={!newTask} />
          </form>

          <TaskBoard
            tasks={tasks}
            onChangeStatusTask={handleChangeStatusTask}
            onDeleteTask={handleDeleteTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
