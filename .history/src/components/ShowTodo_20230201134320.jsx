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
            <span>Task A</span>
            <span className="time">2:09:01 AM 9/14/2030</span>
          </p>
          <Icon icon="material-symbols:edit" />
          <Icon icon="mdi:trash" />
        </li>
      </ul>
    </div>
  );
};

export default ShowTodo;
