import { DropResult } from "@hello-pangea/dnd";

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
  handleDragEnd: (result: DropResult) => void;
}

export interface TodoItemProps extends React.HTMLAttributes<HTMLElement> {
  todo: TodoItemData
}

export interface TodoItemData {
  id: number,
  title: string,
  completed: boolean
};