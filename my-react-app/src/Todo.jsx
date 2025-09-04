import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { addTodo, toggleTodo, removeTodo } from "./redux/todoSlice";

const CounterDisplay = () => {
  const todos = useSelector((state) => state.todoer.todos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = React.useState("");

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Todo = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <CounterDisplay />
      </div>
    </Provider>
  );
};

export default Todo;
