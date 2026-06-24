import TodoItem from './TodoItem';
import styles from './index.module.css';

export const TodoList = (props) => {
  const { todos, handleToggle, handleRemove, handleEdit } = props;

  if (todos.length === 0)
    return <div className={styles.todoList}>할 일을 입력하세요</div>;
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
