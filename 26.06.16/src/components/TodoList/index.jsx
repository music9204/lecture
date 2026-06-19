import { TodoItem } from './TodoItem';
import styles from './index.module.css';

export const TodoList = (props) => {
  const { todos, handleToggle } = props;

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleToggle={handleToggle} />
      ))}
    </div>
  );
};
