import React from "react";

const AddTodo = () => {
  return (
    <section className="addTodo">
      <form>
        <input
          type="text"
          name="task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTodo;
