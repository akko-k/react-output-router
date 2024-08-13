import styles from './styles.module.css';

import { TodoList } from '../../organisms/TodoList';
import { AddTodo } from '../../organisms/AddTodo';
import { SearchForm } from '../../atoms/SearchForm';
import { useTodo } from '../../../hooks/useTodo';

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
    filteredTodos,
    handleAddNewTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodo();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO List</h1>
      <section className={styles.common}>
        <AddTodo
          placeholder={'新しいTODO'}
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          handleAddNewTodo={handleAddNewTodo}
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
          filteredTodos={filteredTodos}
          handleDeleteTodo={handleDeleteTodo}
        />
      </section>
    </div>
  );
};
