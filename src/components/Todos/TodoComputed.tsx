import { useTodo } from "../../hooks/useTodo";

const TodoComputed = () => {

  const { computedItemsLeft, clearCompleted } = useTodo();

  return (
    <section className='flex justify-between rounded-b-md p-4 bg-white'>
      <span className='text-gray-400'>{ computedItemsLeft } items left</span>
      <button className='text-gray-400' onClick={ clearCompleted }>Clear Completed</button>
    </section>
  );
}

export default TodoComputed;