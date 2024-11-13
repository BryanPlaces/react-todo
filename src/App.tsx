import Header from './components/Header.tsx';
import { TodoForm, TodoList, TodoComputed, TodoFilters } from './components/Todos/index.tsx';
import { TodoProvider } from './context/TodoContext.tsx';

const App = () => {

  return (
    <div className="bg-gray-300 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoProvider>
          <TodoForm />
          <TodoList />
          <TodoComputed />
          <TodoFilters />
        </TodoProvider>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}
export default App
