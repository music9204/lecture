import styles from './index.module.css';
import { IoTrashSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';

export const TodoItem = (props) => {
  const { todo, handleToggle, handleRemove } = props;
  const { id, text, checked } = todo;

  const handleClick = () => handleToggle(id);

  const handleRemoveClick = () => handleRemove(id);

  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox} onClick={handleClick}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>
      <div className={checked ? styles.checkedText : styles.text}>{text}</div>
      <div className={styles.remove} onClick={handleRemoveClick}>
        <IoTrashSharp />
      </div>
    </div>
  );
};
