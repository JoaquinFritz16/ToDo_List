import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categoriasPred, setCategoriasPred] = useState("");
  const categorias = ["Estudio", "Hogar", "Salud", "Ocio", "Otro"]
  const handleTextoChange = (e) => {
    setTexto(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };
  const handleCategoriaPredChange= (e) => {
    setCategoria(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    const newObject = {
      text: texto,
      categoria: categoria,
    };
    setTasks([...tasks, newObject]);
    setTexto("");
    setCategoria("");
  };

  const handleDelete = (index) => {
    const nuevaLista = tasks.filter((item, i) => i !== index);
    setTasks(nuevaLista);
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
        <center>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Texto"
              value={texto}
              onChange={handleTextoChange}
            />
            <input
              type="text"
              placeholder="Categoria"
              value={categoria}
              onChange={handleCategoriaChange}
            />
            <br />
            <label>Categoria:</label>
            <select value={categoriasPred} onChange={handleCategoriaPredChange}>
              {categorias.map((categoria, index)=> (
                <option key={index} value={categoria}>{categoria}</option>
              ))}
            </select>
            <button onClick={handleAddTask}>Agregar</button>
          </form>
        </center>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              Nombre: {task.text}, Categoria: {task.categoria}
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
