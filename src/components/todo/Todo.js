import "./Todo.css";

const testTodo = {
  id: 1,
  name: "Walk the dog",
  completed: false,
  confidence: 5,
};

const Todo = () => {
  return (
    <li>
      {/* Checkbox to mark a todo as completed */}
      <input
        type="checkbox"
        checked={testTodo.completed}
        // onChange={() => toggleTodo(id, completed)}
      />
      {/* Display the todo name and confidence level */}
      <span
        style={{
          textDecoration: testTodo.completed ? "line-through" : "none",
        }}
      >
        {testTodo.name} (Confidence: {testTodo.confidence})
      </span>
      {/* Button to remove a todo */}
      {/* <button onClick={() => removeTodo(id)}>Remove</button> */}
      <button>Remove</button>
    </li>
  );
};

export default Todo;
