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
  const [addInputValue, setAddInputValue] = useState('');

  //新規TODOリスト入力
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  //TODOリストに新規TODOリストを追加
  const handleAddNewTodo = (e) => {
    if (e.key === 'Enter' && addInputValue) {
      const newTodo = [
        ...todos,
        {
          id: todos.length + 1,
          title: addInputValue,
        },
      ];
      setTodos(newTodo);
      setAddInputValue('');
    }
  };

  //TODOリストを削除
  const handleDeleteTodo = (id) => {
    const newTodo = todos.filter((todo, index) => index !== id);
    setTodos(newTodo);
  };

  return (
    <div className={styles.container}>
      <h1>TODO List</h1>

      <div>
        {/* リスト追加 */}
        <h2>新規追加</h2>
        <input
          // className={}
          type="text"
          placeholder={'TODOを入力'}
          value={addInputValue}
          onChange={onChangeAddInputValue}
          onKeyDown={handleAddNewTodo}
        />
      </div>

      <div>
        {/* 検索 */}
        <h2>検索</h2>
        <input type="text" />
        <button>検索</button>
      </div>
      {/* リスト */}
      <ul>
        {todos.map((todo, id) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                handleDeleteTodo(id);
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
