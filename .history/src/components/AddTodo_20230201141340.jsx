import React from "react";

const AddTodo = ({ todolist, setTodolist }) => {
  return (
    <section className="addTodo">
      <form>
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
