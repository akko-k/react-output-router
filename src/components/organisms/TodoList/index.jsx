import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';
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
export const TodoList = ({
  filteredTodoList,
  deleteTodo,
}) => {
  const navigate = useNavigate();

  const handleMoveEditPage = (id) => {
    navigate(`${NAVIGATION_PATH.EDIT}/${id}`);
  };

  const handleMoveDetailPage = (id) => {
    navigate(`${NAVIGATION_PATH.DETAIL}/${id}`);
  };
  return (
    <>
      <ul>
        {filteredTodoList.map((todo) => (
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
                onClick={() =>
                  deleteTodo(todo.id, todo.title)
                }
                className={styles.icon}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
