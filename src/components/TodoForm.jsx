import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTodos((prev) => [
      ...prev,
      { title: value, id: uuidv4(), is_completed: false },
    ]);
    event.target.reset();
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          className="rounded-full rounded-e-lg md:w-4/5 xs:w-full md:mx-auto bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 min-w-0  text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button className="md:ml-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
