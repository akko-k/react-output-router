import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import {
  faFile,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
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
  const navigate = useNavigate();

  const handleMoveDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <ul>
        {filteredTodos.map((todo, id) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <div className={styles.icons}>
              <FontAwesomeIcon
                icon={faFile}
                onClick={() =>
                  handleMoveDetailPage(todo.id)
                }
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => handleDeleteTodo(todo.id)}
                className={styles.icon}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
