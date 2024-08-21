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
  //新規TODOリスト入力値
  const [addInputValue, setAddInputValue] = useState('');
  //検索ワード
  const [searchKeyword, setSearchKeyword] = useState('');

  //新規TODOリスト入力値を更新
  const onChangeAddInputValue = (e) =>
    setAddInputValue(e.target.value);

  //検索ワードに一致するTODOリストを取得
  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
    );
  }, [todoList, searchKeyword]);

  //TODOリストに新規TODOリストを追加
  const addNewTodo = () => {
    if (addInputValue) {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = [
        ...todoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setUniqueId(nextUniqueId);
      setTodoList(newTodoList);
      setAddInputValue('');
    }
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
    addInputValue,
    searchKeyword,
    onChangeAddInputValue,
    filteredTodos,
    addNewTodo,
    updateTodo,
    deleteTodo,
    handleChangeSearchKeyword,
  };
};
