import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';

export const TodoDetailTemplate = () => {
  const { id } = useParams();
  const { todoList } = useContext(TodoContext);

  const todo = todoList.find(
    (todo) => todo.id === Number(id)
  );

  if (!todo) {
    return (
      <div className={styles.container}>
        <div>TODOが見つかりませんでした。</div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO 詳細</h1>
      <section className={styles.common}>
        <InputForm value={todo.title} disabled={true} />
      </section>
      <section className={styles.common}>
        <TextArea value={todo.content} disabled={true} />
      </section>
    </div>
  );
};
