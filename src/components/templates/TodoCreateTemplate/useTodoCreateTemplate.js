import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * useTodoCreateTemplate
 */
export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  //title 追加
  const handleCreateTitle = (e) =>
    setInputTitle(e.target.value);

  //content 追加
  const handleCreateContent = (e) =>
    setInputContent(e.target.value);

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (inputTitle && inputContent) {
      addTodo(inputTitle, inputContent);
      navigate('/');
    }
  };

  return {
    inputTitle,
    inputContent,
    handleCreateTitle,
    handleCreateContent,
    handleCreateTodo,
  };
};
