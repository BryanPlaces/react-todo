import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { TodoContextType, TodoItemData } from "../interfaces/todo";
import { DropResult } from "@hello-pangea/dnd";

const storedTodos = localStorage.getItem('todos');
const initialState: Array<TodoItemData> = storedTodos ? JSON.parse(storedTodos) : [];

const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
  filter: '',
  changeFilter: () => {},
  computedItemsLeft: 0,
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  clearCompleted: () => {},
  filteredTodos: [],
  handleDragEnd: () => {},
});

const TodoProvider = ({ children }: { children: ReactNode }) => {

  const [ todos, setTodos ] = useState(initialState);
  const [ filter, setFilter] = useState(FILTERS.ALL);
  
  const createTodo = (title: string) => {
    setTodos([...todos, {id: Date.now(), title: title, completed: false}]);
  }

  const updateTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  const changeFilter = (filter: string) => setFilter(filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filteredTodos = useMemo(() => {
    switch(filter) {
      case FILTERS.ALL:
        return todos;
      case FILTERS.ACTIVE:
        return todos.filter(todo => !todo.completed);
      case FILTERS.COMPLETED:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // Drag and Drop section
  const reorder = (list: TodoItemData[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDragEnd = (result: DropResult) => {

    const { destination, source } = result;

    if (!destination || 
      (source.index === destination.index &&
      source.droppableId === destination.droppableId))
      
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <TodoContext.Provider value={{
      todos,
      filter,
      changeFilter,
      computedItemsLeft,
      createTodo,
      updateTodo,
      deleteTodo,
      clearCompleted,
      filteredTodos,
      handleDragEnd
    }}>
      { children }
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };