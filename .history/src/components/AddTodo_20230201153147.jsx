import React from "react";

const AddTodo = ({ todolist, setTodolist, todo, setTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.id) {
      const date = new Date();
      const updateTodolist = todolist.map((item) =>
        item.id === todo.id
          ? {
              id: todo.id,
              name: todo.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : item
      );
      setTodolist(updateTodolist);
      window.localStorage.setItem("todolist", todolist.json());
      setTodo({});
    } else {
      console.log(e.target.todo.value);
      const date = new Date();
      const newTask = {
        id: Math.random(),
        name: e.target.todo.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTodolist([...todolist, newTask]);
      e.target.todo.value = "";
    }
  };
  return (
    <section className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo.name || ""}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          autoComplete="off"
          placeholder="Add todo"
          maxLength="25"
        />
        <button type="submit">{todo.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTodo;
