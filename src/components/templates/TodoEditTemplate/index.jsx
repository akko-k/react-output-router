import styles from './styles.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { useState } from 'react';

export const TodoEditTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { filteredTodos, updateTodo } =
    useContext(TodoContext);

  const todo = filteredTodos.find(
    (todo) => todo.id === Number(id)
  );

  const [inputTitle, setInputTitle] = useState(
    todo?.title || ''
  );
  const [inputContent, setInputContent] = useState(
    todo?.content || ''
  );

  //title 更新
  const handleChangeTitle = (e) =>
    setInputTitle(e.target.value);

  //content 更新
  const handleChangeContent = (e) =>
    setInputContent(e.target.value);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    console.log('handleUpdateTodo');
    if (!!todo.id && inputTitle && inputContent) {
      updateTodo(todo.id, inputTitle, inputContent);
      navigate('/');
    }
  };

  if (!todo) {
    return <div>TODOが見つかりませんでした。</div>;
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
