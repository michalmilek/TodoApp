import React from "react";
import { Icon } from "@iconify/react";

const ShowTodo = () => {
  return (
    <div className="showTodo">
      <div className="head">
        <div className="head_Todo">
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        <li>
          <p>
            <span className="titleTodo">Task A</span>
            <span className="timeTodo">2:09:01 AM 9/14/2030</span>
          </p>
          <div className="icons">
            <Icon
              className="pen"
              icon="material-symbols:edit"
            />
            <Icon
              className="trash"
              icon="mdi:trash"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShowTodo;
