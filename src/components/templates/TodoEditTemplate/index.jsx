import styles from './styles.module.css';

import { useTodoEditTemplate } from './useTodoEditTemplate';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { CommonButton } from '../../atoms/CommonButton';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';

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
        <div>Todoが見つかりませんでした。</div>
      </div>
    );
  }
  return (
    <BaseLayout title="Todo Edit">
      <form
        className={styles.container}
        onSubmit={handleUpdateTodo}>
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
          <CommonButton label="更新" type="submit" />
        </section>
      </form>
    </BaseLayout>
  );
};
