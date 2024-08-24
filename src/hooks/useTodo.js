import { useState, useMemo } from 'react';
import {
  INIT_TODO_LIST,
  INIT_UNIQUE_ID,
} from '../constants/data';

/**
 * use Todo
 */
export const useTodo = () => {
  //todoリスト
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  //採番ID
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  //検索ワード
  const [searchKeyword, setSearchKeyword] = useState('');

  //検索ワードに一致するTODOリストを取得
  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
    );
  }, [todoList, searchKeyword]);

  //TODOリストに新規TODOリストを追加
  const addTodo = (inputTitle, inputContent) => {
    const nextUniqueId = uniqueId + 1;
    const newTodoList = [
      ...todoList,
      {
        id: nextUniqueId,
        title: inputTitle,
        content: inputContent,
      },
    ];
    setUniqueId(nextUniqueId);
    setTodoList(newTodoList);
  };

  //TODOリストを更新
  const updateTodo = (id, newTitle, newContent) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
          content: newContent,
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  //TODOリストを削除
  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(
      (todo) => todo.id !== id
    );
    setTodoList(newTodoList);
  };
  // 検索ワードを更新
  const handleChangeSearchKeyword = (e) =>
    setSearchKeyword(e.target.value);

  return {
    searchKeyword,
    todoList,
    filteredTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    handleChangeSearchKeyword,
  };
};
