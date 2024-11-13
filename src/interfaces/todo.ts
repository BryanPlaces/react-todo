export interface TodoContextType {
  todos: TodoItemData[];
  filter: string;
  changeFilter: (filter: string) => void
  computedItemsLeft: number;
  createTodo: (title: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  filteredTodos: TodoItemData[];
}

export interface TodoItemData {
  id: number,
  title: string,
  completed: boolean
};