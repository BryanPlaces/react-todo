import { useTodo } from "../../hooks/useTodo";

const TodoFilters = () => {

  const {  filter, changeFilter } = useTodo();
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button
          className={`font-semibold ${ filter === 'all' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('all') }
        >
          All
        </button>
        <button
          className={`font-semibold ${ filter === 'active' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('active') }
        >
          Active
        </button>
        <button
          className={`font-semibold ${ filter === 'completed' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('completed') }
        >
          Completed
        </button>
      </div>
    </section>
  );
}

export default TodoFilters;