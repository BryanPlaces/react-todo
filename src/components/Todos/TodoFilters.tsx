import { useTodo } from "../../hooks/useTodo";

const TodoFilters = () => {

  const {  filter, changeFilter } = useTodo();

  return (
    <section className="container mx-auto mt-8">
      <div className="dark:bg-gray-800 font-semibold flex justify-center gap-4 rounded-md bg-white p-4 transiton-all duration-1000">
        <button
          className={`${ filter === 'all' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('all') }
        >
          All
        </button>
        <button
          className={`${ filter === 'active' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('active') }
        >
          Active
        </button>
        <button
          className={`${ filter === 'completed' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={ () => changeFilter('completed') }
        >
          Completed
        </button>
      </div>
    </section>
  );
}

export default TodoFilters;