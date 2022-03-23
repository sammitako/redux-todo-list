import React, { useCallback } from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../moduels/todos";

const TodosContainer = ({ todos, addTodo, toggleTodo }) => {
  // 렌더링될 때마다 새로 생성되지 않도록 최적화 필요
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
