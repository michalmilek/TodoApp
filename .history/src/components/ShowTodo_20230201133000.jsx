import React from "react";

const ShowTodo = () => {
  return (
    <div className="showTodo">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
    </div>
  );
};

export default ShowTodo;
