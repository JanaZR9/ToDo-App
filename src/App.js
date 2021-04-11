import React, { useState } from "react";
import "./styles.css";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import { Typography } from "@material-ui/core";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (input, start) => {
    setTasks([
      ...tasks,
      { title: input, checked: false, id: tasks.length, date: start }
    ]);
  };

  const deleteTask = (id) => {
    let filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const addList = tasks.map((task) => {
    return <ToDoList task={task} deleteTask={deleteTask} />;
  });

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <Form addTask={addTask} />
      <br />
      <ul>{addList}</ul>
    </div>
  );
}
