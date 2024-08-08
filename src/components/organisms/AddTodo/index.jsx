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
      <h2>新規追加</h2>
      <input
        type="text"
        placeholder={placeholder}
        value={addInputValue}
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddNewTodo}
      />
    </>
  );
};
