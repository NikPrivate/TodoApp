import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoitem) => (
        <Todo
          key={todoitem.id}
          todoList={todoList}
          todoitem={todoitem}
          setTodoList={setTodoList}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
