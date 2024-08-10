import styles from './style.module.css';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={() => handleDeleteTodo(id)}
              className={styles.deleteIcon}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
