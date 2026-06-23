import { TodoItem } from './TodoItem';
import styles from './index.module.css';

export const TodoList = (props) => {
  const { todos, handleToggle, handleRemove, editId, setEditId, handleEdit } =
    props;

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
          editId={editId}
          setEditId={setEditId}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
