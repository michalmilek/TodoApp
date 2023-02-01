import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";

function App() {
  const [theme, setTheme] = useState("g1");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [todo, setTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className={"App"}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
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
