import { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoTemplate } from './components/TodoTemplate';
import { TodoList } from './components/TodoList';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      text: 'react',
      checked: false,
    },
    {
      id: uuid(),
      text: 'angular',
      checked: false,
    },

    {
      id: uuid(),
      text: 'vue',
      checked: false,
    },
  ]);

  const handleInsert = (value) => {
    const newTodo = { id: uuid(), text: value, checked: false };
    setTodos(todos.concat(newTodo));
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <TodoTemplate>
      <TodoInput handleInsert={handleInsert} />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </TodoTemplate>
  );
};

export default App;
