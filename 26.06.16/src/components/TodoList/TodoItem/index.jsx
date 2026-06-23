import styles from './index.module.css';
import { IoTrashSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';
import { MdModeEditOutline } from 'react-icons/md';
import { useState } from 'react';

export const TodoItem = (props) => {
  const { todo, handleToggle, handleRemove, editId, setEditId, handleEdit } =
    props;
  const { id, text, checked } = todo;

  const [value, setValue] = useState(text);

  const handleChangeEdit = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => handleToggle(id);

  const handleRemoveClick = () => handleRemove(id);

  const handleEditClick = () => setEditId(id);

  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox} onClick={handleClick}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>
      {editId === id ? (
        <input value={value} onChange={handleChangeEdit} />
      ) : (
        <div className={checked ? styles.checkedText : styles.text}>{text}</div>
      )}

      <div className={styles.edit} onClick={handleEditClick}>
        <MdModeEditOutline />
      </div>
      <div className={styles.remove} onClick={handleRemoveClick}>
        <IoTrashSharp />
      </div>
    </div>
  );
};
