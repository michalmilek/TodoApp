import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <ShowTodo />
    </div>
  );
}

export default App;
