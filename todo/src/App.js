import React, { useState } from "react";

import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { text: task, isCompleted: false };
      setTasks((prevTasks) =>
        [...prevTasks, newTask].sort((a, b) => a.text.localeCompare(b.text))
      );
      setTask("");
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== taskToDelete));
  };

  const handleToggleCompleteTask = (taskToToggle) => {
    setTasks((prevTasks) =>
      prevTasks
        .map((t) =>
          t === taskToToggle ? { ...t, isCompleted: !t.isCompleted } : t
        )
        .sort((a, b) => a.text.localeCompare(b.text))
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <Ul>
        {tasks.map((task, index) => (
          <Li key={index}>
            <span
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleToggleCompleteTask(task)}>
              {task.isCompleted ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default App;
