import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todos-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
