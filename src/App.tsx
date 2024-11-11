import CrossIcon from './components/icons/CrossIcon.tsx';
import MoonIcon from './components/icons/MoonIcon.tsx';

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between pb-4">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button><MoonIcon fill="#FFF"/></button>
        </div>
        
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
          className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new job..."
          />
        </form>
      </header>
      
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online javascript curse bluueweb</p>
            <button><CrossIcon /></button>
          </article>
          
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online javascript curse bluueweb</p>
            <button><CrossIcon /></button>
          </article>
          
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online javascript curse bluueweb</p>
            <button><CrossIcon /></button>
          </article>
        </div>

        <section className='flex justify-between p-4 bg-white'>
          <span className='text-gray-400'>5 items left</span>
          <button className='text-gray-400'>Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className='hover:text-blue-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
}
export default App
