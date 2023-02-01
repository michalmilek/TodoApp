import React from "react";

const AddTodo = ({ todolist, setTodolist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
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
