import styles from './styles.module.css';

import { TodoList } from '../../organisms/TodoList';
import { AddTodo } from '../../organisms/AddTodo';
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
    addInputValue,
    searchKeyword,
    onChangeAddInputValue,
    todoList,
    addNewTodo,
    deleteTodo,
    handleChangeSearchKeyword,
  } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO List</h1>
      <section className={styles.common}>
        <AddTodo
          placeholder={'新しいTODO'}
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          addNewTodo={addNewTodo}
        />
      </section>
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
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      </section>
    </div>
  );
};
