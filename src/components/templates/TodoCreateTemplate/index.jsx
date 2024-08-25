import styles from './styles.module.css';

import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';

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
    <BaseLayout title="Create Todo">
      <form
        // className={styles.container}
        onSubmit={handleCreateTodo}>
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
          <CommonButton label="追加" type="submit" />
        </section>
      </form>
    </BaseLayout>
  );
};
