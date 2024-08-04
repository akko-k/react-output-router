import styles from './styles.module.css';

export const TodoTemplate = () => {

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
      <li>
        <span>TODO1</span>
        <button>削除</button>
      </li>
      <li>
        <span>TODO2</span>
        <button>削除</button>
      </li>
      <li>
        <span>TODO3</span>
        <button>削除</button>
      </li>
    </ul>
  </div>
);
}
