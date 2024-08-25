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

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
