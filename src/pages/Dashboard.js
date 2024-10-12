// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import Navbar from "../components/Layout/Navbar"; // Include the Navbar

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: token },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar /> {/* Add the Navbar for navigation */}
      <h2>Dashboard</h2>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Dashboard;
