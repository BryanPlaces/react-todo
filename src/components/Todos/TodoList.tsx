import TodoItem from "./TodoItem";
import { useTodo } from "../../hooks/useTodo";

const TodoList = () => {

  const { filteredTodos } = useTodo();

  return (
    <div className="dark:bg-gray-800 bg-white rounded-t-md [&>article]:p-4 mt-8 transiton-all duration-1000">
      {
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      }

    </div>
  );
}

export default TodoList;