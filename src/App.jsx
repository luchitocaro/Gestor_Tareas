import { useState, useEffect } from "react";
import { TaskCreator } from "./components/taskCreator.jsx";
import { TaskTable } from "./components/tasktable.jsx";
import "./App.css";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

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

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

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
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(!showCompleted)}
        ></input>
        <label>Mostrar Tareas Completadas</label>

        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </>
  );
}

export default App;
