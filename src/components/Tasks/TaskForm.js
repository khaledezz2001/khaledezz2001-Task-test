// src/components/Tasks/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const newTask = { title, description, dueDate, priority };
      const response = await axios.post('http://localhost:5000/api/tasks', newTask, {
        headers: { Authorization: token },
      });
      setTasks((prevTasks) => [...prevTasks, response.data]); // Update the task list
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('medium');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Task Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <input 
          type="date" 
          className="form-control" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <select 
          className="form-control" 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">Add Task</button>
    </form>
  );
};

export default TaskForm;
