import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * useTodoEditTemplate
 */
export const useTodoEditTemplate = ({
  todoList,
  updateTodo,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todoList.find(
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
    if (!!todo.id && inputTitle && inputContent) {
      updateTodo(todo.id, inputTitle, inputContent);
      navigate('/');
    }
  };

  return {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };
};
