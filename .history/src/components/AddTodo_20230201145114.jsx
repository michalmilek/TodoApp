import React from "react";

const AddTodo = ({ todolist, setTodolist, todo, setTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.todo.value);
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.todo.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTodolist([...todolist, newTask]);
  };
  return (
    <section className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
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
