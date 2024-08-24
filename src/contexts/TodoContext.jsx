import { createContext } from 'react';
import { useTodo } from '../hooks/useTodo';

export const TodoContext = createContext({});

/**
 * TodoProvider component.
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
export const TodoProvider = ({ children }) => {
  const {
    searchKeyword,
    todoList,
    filteredTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    handleChangeSearchKeyword,
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        searchKeyword,
        todoList,
        filteredTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
        handleChangeSearchKeyword,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
