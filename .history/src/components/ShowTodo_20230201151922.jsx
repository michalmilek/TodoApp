import React from "react";
import { Icon } from "@iconify/react";

const ShowTodo = ({ todolist, setTodolist, todo, setTodo }) => {
  const handleEdit = (id) => {
    const selectedTodo = todolist.find((item) => item.id === id);
    console.log(selectedTodo);
    setTodo(selectedTodo);
  };

  const handleDelete = (id) => {
    const updatedTodoList = todolist.filter((item) => item.id !== id);
    setTodolist(updatedTodoList);
  };
  return (
    <div className="showTodo">
      <div className="head">
        <div className="head_Todo">
          <span className="title">Todo</span>
          <span className="count">{todolist.length}</span>
        </div>
        <button
          onClick={() => setTodolist([])}
          className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>
            <p>
              <span className="titleTodo">{todo.name}</span>
              <span className="timeTodo">{todo.time}</span>
            </p>
            <div className="icons">
              <Icon
                onClick={() => handleEdit(todo.id)}
                className="pen"
                icon="material-symbols:edit"
              />
              <Icon
                onClick={() => handleDelete(todo.id)}
                className="trash"
                icon="mdi:trash"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodo;
