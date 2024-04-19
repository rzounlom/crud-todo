import "./Todo.css";

// const testTodo = {
//   id: 1,
//   name: "Walk the dog",
//   completed: false,
//   confidence: 5,
// };

const Todo = ({ id, name, completed, confidence }) => {
  return (
    <li>
      {/* Checkbox to mark a todo as completed */}
      <input
        type="checkbox"
        checked={completed}
        // onChange={() => toggleTodo(id, completed)}
      />
      {/* Display the todo name and confidence level */}
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name} (Confidence: {confidence})
      </span>
      {/* Button to remove a todo */}
      {/* <button onClick={() => removeTodo(id)}>Remove</button> */}
      <button>Remove</button>
    </li>
  );
};

export default Todo;
