import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deletHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo-container ${todo.completed ? "completed" : ""}`}>
      <li className="todo">
        <FontAwesomeIcon
          icon={todo.completed ? faCircleCheck : faBarsStaggered}
          size="xs"
          beat
        />{" "}
        {text}
      </li>
      <div className={`action-btns ${todo.completed ? "hidden" : ""}`}>
        <button onClick={completeHandler} className="complete-btn">
          <FontAwesomeIcon icon={faCheck} inverse size="lg" />
        </button>
        <button onClick={deletHandler} className="trash-btn">
          <FontAwesomeIcon icon={faTrash} size="lg" inverse />
        </button>
      </div>
    </div>
  );
};
export default ToDo;
