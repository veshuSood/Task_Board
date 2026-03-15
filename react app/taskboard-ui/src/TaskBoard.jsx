import { useState, useEffect } from "react";
import { getAllTasks, createTask, deleteTask } from "./services/taskService";
import "./TaskBoard.css";

function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        getAllTasks().then(response => {
            setTasks(response.data);
        });
    }, []);
    return (
  <div className="taskboard">
    <h1>✅ TaskBoard</h1>
    <div className="input-row">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn-add" onClick={() => {
        createTask({ title: inputValue, completed: false })
          .then(() => {
            setInputValue("");
            return getAllTasks();
          })
          .then(res => setTasks(res.data));
      }}>Add</button>
    </div>
    <div className="task-list">
      {tasks.length === 0 && <p className="empty">No tasks yet. Add one above!</p>}
      {tasks.map(task => (
  <div className="task-item" key={task.id}>
    <div className="task-dot"></div>
    <span className="task-title">{task.title}</span>
    <button className="btn-delete" onClick={() =>
      deleteTask(task.id).then(() =>
        getAllTasks().then(res => setTasks(res.data)))
    }>Delete</button>
  </div>
      ))}
    </div>
  </div>
  
);
}
export default TaskBoard;