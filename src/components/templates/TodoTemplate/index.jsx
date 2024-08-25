import styles from './styles.module.css';

import { TodoList } from '../../organisms/TodoList';
import { SearchForm } from '../../atoms/SearchForm';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { useTodoTemplate } from './useTodoTemplate';
import { BaseLayout } from '../../organisms/BaseLayout';

/**
 * TodoTemplate component.
 *
 * @component
 * @returns {JSX.Element} TodoTemplate component.
 */
export const TodoTemplate = () => {
  const { todoList, deleteTodo } = useContext(TodoContext);

  const {
    searchKeyword,
    filteredTodoList,
    handleChangeSearchKeyword,
  } = useTodoTemplate({ todoList });

  return (
    <BaseLayout title="Todo List">
      <section className={styles.common}>
        <SearchForm
          value={searchKeyword}
          placeholder={'Todoを検索'}
          handleChangeSearchKeyword={
            handleChangeSearchKeyword
          }
        />
        <section className={styles.common}></section>
        <TodoList
          filteredTodoList={filteredTodoList}
          deleteTodo={deleteTodo}
        />
      </section>
    </BaseLayout>
  );
};
