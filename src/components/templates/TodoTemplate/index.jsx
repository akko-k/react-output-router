import styles from './styles.module.css';

import { TodoList } from '../../organisms/TodoList';
import { SearchForm } from '../../atoms/SearchForm';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';

/**
 * TodoTemplate component.
 *
 * @component
 * @returns {JSX.Element} TodoTemplate component.
 */
export const TodoTemplate = () => {
  const {
    searchKeyword,
    filteredTodoList,
    deleteTodo,
    handleChangeSearchKeyword,
  } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO List</h1>
      <section className={styles.common}></section>
      <section className={styles.common}>
        <SearchForm
          value={searchKeyword}
          placeholder={'TODOを検索'}
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
    </div>
  );
};
