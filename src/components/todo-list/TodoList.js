import "./TodoList.css";

import Todo from "../todo/Todo";
import { initialTodos } from "../../data";

const TodoList = () => {
  return (
    <div>
      {initialTodos.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
