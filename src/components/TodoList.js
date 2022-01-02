import React, { useState } from 'react';

import Form from './Form';
import Todo from './Todo';

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);

  }

  const completeTodo = id => {
    let updatedTodos= todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>All Task</h1>
      <Form onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo} />
    </>
  )
}

export default List
