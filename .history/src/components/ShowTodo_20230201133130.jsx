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
      <ul>
        <li>
          <p>
            <span>Task A</span>
            <span>2:09:01 AM 9/14/2030</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ShowTodo;
