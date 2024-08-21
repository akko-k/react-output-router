import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import {
  faFile,
  faPenToSquare,
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
  const { filteredTodos, deleteTodo } = props;
  const navigate = useNavigate();

  const handleMoveEditPage = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleMoveDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <>
      <ul>
        {filteredTodos.map((todo) => (
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
                icon={faPenToSquare}
                onClick={() => handleMoveEditPage(todo.id)}
                className={styles.icon}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => deleteTodo(todo.id)}
                className={styles.icon}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
