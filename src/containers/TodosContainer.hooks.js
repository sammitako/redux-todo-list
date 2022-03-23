import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../moduels/todos";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // 렌더링될 때마다 새로 생성되지 않도록 최적화 필요
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
