import { useState } from 'react';
import './App.css'

function App() {

  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tasks', newTaskName);
    setNewTaskName('');
  }

  return (
    <>
      <div className='app'>
        <h1>Gestor de Tareas</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingrese nueva tarea' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />

          <button> Agregar</button>
        </form>
      </div>
    </>
  );
}

export default App
