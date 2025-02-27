import { useState, useEffect } from "react";
import { TaskCreator } from "./components/taskCreator.jsx";
import "./App.css";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  function createNewTask(taskName) {
    const taskExists = tasksItems.some(
      (task) => task.name.toLowerCase() === taskName.toLowerCase()
    );

    if (taskExists) {
      alert("Esta tarea ya existe.");
      return;
    }
    setTasksItems([
      ...tasksItems,
      {
        name: taskName,
        done: false,
      },
    ]);
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

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
