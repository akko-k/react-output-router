import { useState, useMemo } from 'react';

/**
 * use Todo
 */
export const useTodoTemplate = ({ todoList }) => {
  //検索ワード
  const [searchKeyword, setSearchKeyword] = useState('');

  // 検索ワードを更新
  const handleChangeSearchKeyword = (e) =>
    setSearchKeyword(e.target.value);

  //検索ワードに一致するTodoリストを取得
  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) =>
      todo.title
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
    );
  }, [todoList, searchKeyword]);

  return {
    searchKeyword,
    filteredTodoList,
    handleChangeSearchKeyword,
  };
};
