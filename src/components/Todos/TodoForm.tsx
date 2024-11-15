import { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

const TodoForm = () => {

  const [title, setTitle] = useState('');
  const { createTodo } = useTodo();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return setTitle('');
    }

    createTodo(title);
    setTitle('')
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className="dark:bg-gray-800 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4 transiton-all duration-1000">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="dark:bg-gray-800 w-full text-gray-400 outline-none transiton-all duration-1000"
        type="text"
        placeholder="Create a new job..."
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
      />
    </form>
  );
}

export default TodoForm;