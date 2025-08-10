"use client";

import React, { useEffect, useState } from "react";
import Home from "components/Home";
import AddTodo from "components/AddTodo";
import Todo from "models/todoInterface";
import todos from "services/todos";

const Page = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const response = await todos.getTodos();
    setTodoList(response);
  };

  const addTodo = async (title: string) => {
    const response = await todos.addTodo(title);
    let formattedTodo = { title: response.title, id: todoList.length + 1 };
    setTodoList([formattedTodo, ...todoList]);
  };

  const removeHandler = (id: number): void => {
    const filteredTodo = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodo);
  };

  return (
    <section className="m-3 lg:max-w-[998px] lg:mx-auto">
      <AddTodo title={addTodo} />
      <Home lists={todoList} onRemove={removeHandler} />
    </section>
  );
};

export default Page;
