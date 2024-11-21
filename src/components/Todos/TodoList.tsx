import TodoItem from "./TodoItem";
import { useTodo } from "../../hooks/useTodo";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const TodoList = () => {

  const { filteredTodos } = useTodo();

  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          { ...droppableProvided.droppableProps }
          className="dark:bg-gray-800 bg-white rounded-t-md [&>article]:p-4 mt-8 transiton-all duration-1000"
        >
          {
            filteredTodos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                {
                  (draggableProvided) => (
                    <TodoItem
                      key={ todo.id }
                      todo={ todo }
                      ref={ draggableProvided.innerRef }
                      { ...draggableProvided.dragHandleProps }
                      { ...draggableProvided.draggableProps }
                    />
                  )
                }
              </Draggable>
            ))
          }

          { droppableProvided.placeholder }
        </div>
      )}
    </Droppable>
  );
}

export default TodoList;