import { useTodo } from "../../hooks/useTodo";
import { TodoItemProps } from "../../interfaces/todo";
import IconCheck from "../icons/IconCheck";
import IconCross from "../icons/IconCross";

const TodoItem = ({ todo } : TodoItemProps) => {

  const { id, title, completed} = todo;
  const { updateTodo, deleteTodo } = useTodo();

  return (
    <article className="flex gap-4 border-b border-b-gray-400">
      <button
      onClick={ () => updateTodo(id) }
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
          }`}
      >
        { completed && <IconCheck /> }
      </button>

      <p className={`${ completed && "line-through" } grow text-gray-600`}>{ title }</p>
      <button onClick={ () => deleteTodo(id) }><IconCross /></button>
    </article>
  );
}

export default TodoItem;