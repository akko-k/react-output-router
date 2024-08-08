/**
 * Renders a list of todos.
 *
 * @component
 * @param {Object} props
 * @returns {JSX.Element}The TodoList component.
 */
export const TodoList = (props) => {
  const { filteredTodos, handleDeleteTodo } = props;
  return (
    <>
      <ul>
        {filteredTodos.map((todo, id) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                handleDeleteTodo(id);
              }}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
