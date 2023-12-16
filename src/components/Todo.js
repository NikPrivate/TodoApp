import styles from "../style.module.css";

const Todo = ({ todoitem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todoitem.id));
  };
  return (
    <div className={styles.todolistform}>
      <h3 className={styles.todolist} onClick={handleDelete}>
        {todoitem.name}
      </h3>
    </div>
  );
};

export default Todo;
