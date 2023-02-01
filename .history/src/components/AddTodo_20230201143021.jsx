import React from "react";

const AddTodo = ({ todolist, setTodolist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
  };
  return (
    <section className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          autoComplete="off"
          placeholder="Add todo"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTodo;
