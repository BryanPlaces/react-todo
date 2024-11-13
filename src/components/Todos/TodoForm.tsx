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
    <form onSubmit={ handleSubmit } className="flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new job..."
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
      />
    </form>
  );
}

export default TodoForm;