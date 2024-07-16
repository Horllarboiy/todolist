import React from "react";
import { useEffect } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Item = ({ item, setTodos }) => {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInpuSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  return (
    <li
      className="flex justify-between my-5 bg-white rounded-2xl py-7 px-5 md:w-3/5 mx-auto"
      id={item?.id}
    >
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              className=" rounded-full rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="flex items-center" onClick={completeTodo}>
            {item.is_completed ? (
              <i className="">
                <RiCheckboxCircleFill size={28} />
              </i>
            ) : (
              <i className="">
                <RiCheckboxBlankCircleFill size={28} />
              </i>
            )}
            <p className="font-semibold ml-2">{item?.title}</p>
          </button>
          <div>
            <button onClick={handleEdit}>
              <span><FaRegEdit size={27} /></span>
            </button>
            <button onClick={handleDelete}>
              <span>
              <MdDelete size={25} />
              </span>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <ol>
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p className="italic mt-2 text-white">
          Seems lonely in here, what are you up to?
        </p>
      )}
    </ol>
  );
};

export default TodoList;
