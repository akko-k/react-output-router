import styles from './styles.module.css';

import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';

export const TodoCreateTemplate = () => {
  const { todoList, addTodo } = useContext(TodoContext);
  const {
    inputTitle,
    inputContent,
    handleCreateTitle,
    handleCreateContent,
    handleCreateTodo,
  } = useTodoCreateTemplate({ todoList, addTodo });

  return (
    <form
      className={styles.container}
      onSubmit={handleCreateTodo}>
      <h1 className={styles.title}>TODO 追加</h1>
      <section className={styles.common}>
        <InputForm
          value={inputTitle}
          placeholder={'タイトル'}
          onChange={handleCreateTitle}
        />
      </section>
      <section className={styles.common}>
        <TextArea
          value={inputContent}
          placeholder={'内容'}
          onChange={handleCreateContent}
        />
      </section>
      <section className={styles.common}>
        <Button label="追加" type="submit" />
      </section>
    </form>
  );
};
