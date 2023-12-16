import { useState } from "react";
import shortid from "shortid";
import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    setTodo("");
  };

  return (
    <div className={styles.todoform} onSubmit={handleSubmit}>
      <form>
        <input
          className={styles.TodoInput}
          value={todo}
          placeholder="What you want to do?"
          onChange={handleTodo}
        ></input>
        <div className={styles.submitbuttonform}>
          <button className={styles.submitbutton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
