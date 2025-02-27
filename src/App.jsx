import { useState } from "react";
import { TaskCreator } from "./components/taskCreator.jsx";
import "./App.css";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "tarea 1", done: false },
    { name: "tarea 2", done: false },
    { name: "tarea 3", done: false },
  ]);

  function createNewTask(taskName) {
    alert(taskName);
  }

  return (
    <>
      <div className="app">
        <h1>Gestor de Tareas</h1>
        <TaskCreator createNewTask={createNewTask}></TaskCreator>
        <table>
          <thead>
            <tr>
              <th>Tareas</th>
            </tr>
          </thead>
          <tbody>
            {tasksItems.map((task) => (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
