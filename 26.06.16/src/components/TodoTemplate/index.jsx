import styles from './index.module.css';

export const TodoTemplate = ({ children }) => {
  return (
    <div className={styles.todoTemplate}>
      <div className={styles.appTitle}>오늘의 할 일</div>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};
