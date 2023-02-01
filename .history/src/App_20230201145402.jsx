import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState({});
  return (
    <div className="App">
      <Header />
      <AddTodo
        todolist={todolist}
        setTodolist={setTodolist}
        todo={todo}
        setTodo={setTodo}
      />
      <ShowTodo
        todolist={todolist}
        setTodolist={setTodolist}
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;
