import styles from './index.module.css';
import { IoTrashSharp } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdOutlineCheckBox } from 'react-icons/md';

export const TodoItem = (props) => {
  const { todo, handleToggle } = props;
  const { id, text, checked } = todo;

  const handleClick = () => handleToggle(id);

  // const handleRemoveClick;

  return (
    <div className={styles.todoItem}>
      <div className={styles.checkbox} onClick={handleClick}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>
      <div className={checked ? styles.checkedText : styles.text}>{text}</div>
      <div className={styles.remove}>
        <IoTrashSharp />
      </div>
    </div>
  );
};

// remove 숙제(삭제기능)
//MND 사이트 참고해서 f 앞의 array 함수
// >> 내가 배열에서 특정항목을 없앤 새 배열
// concat, map 이외 함수 찾아서

// 수정기능까지 해볼 수 있으면
