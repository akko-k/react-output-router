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
    <>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={addInputValue}
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddNewTodo}
      />
    </>
  );
};
