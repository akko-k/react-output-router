import styles from './styles.module.css';
import { useState } from 'react';

export const TodoTemplate = () => {
  const INIT_TODO_LIST = [
    {
      id: 1,
      title: 'ご飯を作る',
    },
    {
      id: 2,
      title: '洗濯する',
    },
  ];
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  return (
    <div className={styles.container}>
      <h1>TODO List</h1>
      <div>ADD TODO</div>
      {/* リスト追加 */}
      <div>
        <input type="text" />
      </div>
      {/* 検索 */}
      <div>
        <input type="text" />
      </div>
      {/* リスト */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
