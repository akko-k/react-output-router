import styles from './styles.module.css';
/**
 * AddTodo component.
 *
 * @component
 * @param {Object} props
 * @returns {JSX.Element} The AddTodo component.
 */
export const AddTodo = (props) => {
  const {
    placeholder,
    addInputValue,
    onChangeAddInputValue,
    addNewTodo,
  } = props;
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={addInputValue}
        onChange={onChangeAddInputValue}
      />
      <button
        className={styles.button}
        onClick={addNewTodo}>
        追加
      </button>
    </div>
  );
};
