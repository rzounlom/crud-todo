import "./App.css";

import TodoList from "./components/todo-list/TodoList";
import { initialTodos } from "./data";
import { useState } from "react";

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState(initialTodos);
  // State to manage the input field for new todo names
  const [todoName, setTodoName] = useState("");
  // State to manage the confidence level for new todos
  const [confidence, setConfidence] = useState(5);

  // console.log({ todoName, confidence });

  const addTodo = (event) => {
    event.preventDefault();
    console.log({ todoName, confidence });
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <div className="todo-header">
        {/* Input field for new todo names */}
        <input
          className="add-todo"
          type="text"
          placeholder="Add a new todo..."
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          style={{ flexGrow: 1, marginRight: "10px" }}
        />
        {/* Input field for confidence level */}
        <input
          className="todo-confidence"
          type="number"
          min="1"
          max="5"
          value={confidence}
          onChange={(e) => setConfidence(e.target.value)}
        />
        <button onClick={addTodo}>Submit</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
