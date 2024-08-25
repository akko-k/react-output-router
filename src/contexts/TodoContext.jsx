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
  const { todoList, addTodo, updateTodo, deleteTodo } =
    useTodo();

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
