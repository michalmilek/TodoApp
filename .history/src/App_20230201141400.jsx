import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";

function App() {
  const [todolist, setTodolist] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTodo
        todolist={todolist}
        setTodolist={setTodolist}
      />
      <ShowTodo />
    </div>
  );
}

export default App;
