import Header from './components/Header.tsx';
import { TodoForm, TodoList, TodoComputed, TodoFilters } from './components/Todos/index.tsx';
import { TodoProvider } from './context/TodoContext.tsx';

const App = () => {

  return (
    <div className="min-h-screen bg-contain bg-no-repeat
      bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
      md:bg-[url('./assets/images/bg-desktop-light.jpg')]
      dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
      md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
      transiton-all duration-1000">
      <Header />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoProvider>
          <TodoForm />
          <TodoList />
          <TodoComputed />
          <TodoFilters />
        </TodoProvider>
      </main>

      <footer className="font-semibold mt-8 text-center text-gray-500">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}
export default App
