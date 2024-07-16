import React, { useState} from "react";
import { v4 as uuidv4 } from "uuid";

// components
import TODOHero from "../components/TODOHero";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/Todos";

const Index = () => {
  const [todos, setTodos] = useState([
    {
      title: "Some other task",
      id: uuidv4(),
      is_completed: false,
    },
  ]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;



  return (
    <div className="px-5 py-2 bg-[#101c2e] h-screen">
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <TodoForm setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Index;
