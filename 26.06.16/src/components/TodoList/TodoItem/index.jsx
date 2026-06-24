import styles from './index.module.css';
import { IoTrashSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';
import { useState } from 'react';
import React from 'react';

const TodoItem = (props) => {
  const { todo, handleToggle, handleRemove, handleEdit } = props;
  const { id, text, checked } = todo;

  const [newText, setNewText] = useState(text);

  const handleChangeEdit = (e) => {
    setNewText(e.target.value);
  };

  const handleClick = () => handleToggle(id);

  const handleRemoveClick = () => handleRemove(id);

  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox} onClick={handleClick}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>

      <input
        className={checked ? styles.checkedText : styles.text}
        value={newText}
        onChange={handleChangeEdit}
        onBlur={() => handleEdit(id, newText)}
      />
      <div className={styles.remove} onClick={handleRemoveClick}>
        <IoTrashSharp />
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
//props가 안바뀌었으면, 렌더링 하지 말고 state가 바겼을 때만 해라
