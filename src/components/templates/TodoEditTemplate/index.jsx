import styles from './styles.module.css';

import { useTodoEditTemplate } from './useTodoEditTemplate';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';

export const TodoEditTemplate = () => {
  const { todoList, updateTodo } = useContext(TodoContext);
  const {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  } = useTodoEditTemplate({ todoList, updateTodo });

  if (!todo) {
    return (
      <div className={styles.container}>
        <div>TODOが見つかりませんでした。</div>
      </div>
    );
  }
  return (
    <form
      className={styles.container}
      onSubmit={handleUpdateTodo}>
      <h1 className={styles.title}>TODO 編集</h1>
      <section className={styles.common}>
        <InputForm
          value={inputTitle}
          placeholder={'タイトル'}
          onChange={handleChangeTitle}
        />
      </section>
      <section className={styles.common}>
        <TextArea
          value={inputContent}
          placeholder={'内容'}
          onChange={handleChangeContent}
        />
      </section>
      <section className={styles.common}>
        <Button label="更新" type="submit" />
      </section>
    </form>
  );
};
