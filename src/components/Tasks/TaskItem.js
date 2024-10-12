// src/components/Tasks/TaskItem.js
import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, setTasks }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
        headers: { Authorization: token },
      });
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li className="list-group-item">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
      <p>Priority: {task.priority}</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
