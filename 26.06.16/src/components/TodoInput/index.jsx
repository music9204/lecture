import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import styles from './index.module.css';

export const TodoInput = (props) => {
  const { handleInsert } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInsert(value);
    setValue('');
  };

  return (
    <form className={styles.todoInput} onSubmit={handleSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={handleChange}
        value={value}
      />
      <button type="submit">
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};
