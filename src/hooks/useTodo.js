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
  const [todos, setTodos] = useState(INIT_TODO_LIST);
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
    return todos.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
    );
  }, [todos, searchKeyword]);

  //TODOリストに新規TODOリストを追加
  const handleAddNewTodo = () => {
    if (addInputValue) {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...todos,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setUniqueId(nextUniqueId);
      setTodos(newTodo);
      setAddInputValue('');
    }
  };

  //TODOリストを削除
  const handleDeleteTodo = (id) => {
    const newTodo = todos.filter(
      (todo, index) => index !== id
    );
    setTodos(newTodo);
  };
  // 検索ワードを更新
  const handleChangeSearchKeyword = (e) =>
    setSearchKeyword(e.target.value);

  const status = {
    addInputValue,
    searchKeyword,
    onChangeAddInputValue,
  };

  const action = {
    filteredTodos,
    handleAddNewTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  };

  return [status, action];
};
