import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';

export const TodoDetailTemplate = () => {
  const { id } = useParams();
  const { filteredTodos } = useContext(TodoContext);
  //   console.log(filteredTodos);
  //   console.log(id);
  const todo = filteredTodos.find(
    (todo) => todo.id === Number(id)
  );

  if (!todo) {
    return <div>TODOが見つかりませんでした。</div>;
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
