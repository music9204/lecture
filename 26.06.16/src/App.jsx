import { useEffect, useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoTemplate } from './components/TodoTemplate';
import { TodoList } from './components/TodoList';
import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';

function createBulkTodos() {
  const arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push({
      id: uuid(),
      text: `react${i}`,
      checked: false,
    });
  }
  return arr;
}

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleInsert = useCallback(
    (value) => {
      const newTodo = { id: uuid(), text: value, checked: false };
      setTodos(todos.concat(newTodo));
    },
    [todos],
  );

  const handleToggle = useCallback(
    (id) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos],
  );

  const handleRemove = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    },
    [todos],
  );

  const handleEdit = (id, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (!savedTodos) return;
    const parsedTodos = JSON.parse(savedTodos);
    setTodos(parsedTodos);
  }, []);

  useEffect(() => {
    const stringified = JSON.stringify(todos);
    localStorage.setItem('todos', stringified);
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInput handleInsert={handleInsert} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </TodoTemplate>
  );
};

export default App;

// 날짜, 등록시간 수정시간
// 완료된건 수정못하게 (disabled) 디폴트값이 false
