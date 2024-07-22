import React from "react";
import { useState } from "react";

function ToDo_list() {
  const [tasks, setTasks] = useState([]);
  const [Newtask, setNewtask] = useState("");

  const handleInputChange = (e) => {
    setNewtask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, Newtask]);
    setNewtask("");
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
            value={Newtask} 
            onChange={handleInputChange} />
          <button onClick={handleAddTask}>Agregar</button>
          <p>{tasks.join(", ")}</p>
        </form>
      </div>
    </div>
  );
}

export default ToDo_list;
