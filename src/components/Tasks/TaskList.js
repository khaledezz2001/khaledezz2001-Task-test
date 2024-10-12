// src/components/Tasks/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div>
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} setTasks={setTasks} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
