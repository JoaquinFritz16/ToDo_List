import React from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Todo">
      <div className="Title">
        <center>
          <h1>Lista de Tareas</h1>
        </center>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={newTask} 
            onChange={handleInputChange} 
          />
          <button onClick={handleAddTask}>Agregar</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
