import styles from './style.module.css';
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
    handleAddNewTodo,
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
        className={styles.button} // Add styling for the button
        onClick={handleAddNewTodo} // Trigger the function on button click
      >
        追加
      </button>
    </div>
  );
};
