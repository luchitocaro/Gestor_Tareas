import { TaskRow } from "./taskRow.jsx";

export const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))}
      </tbody>
    </table>
  );
};
