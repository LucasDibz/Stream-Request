import { StateDisplay } from './Data';
import { useStreamData } from './hooks/useStreamData';

function App() {
  const [fetchData, { state, loading }] = useStreamData();

  return (
    <>
      <main className='min-h-screen min-w-screen bg-slate-600 text-white'>
        <div className='pt-10 grid items-center gap-5 justify-center'>
          <h1 className='w-fit font-semibold text-lg'>Consume Stream</h1>
          <button
            onClick={fetchData}
            type='button'
            disabled={loading}
            aria-disabled={loading}
            className='bg-slate-500 rounded p-2 disabled:brightness-75 hover:brightness-110 transition'
          >
            Fetch Stream Data
          </button>
        </div>

        <section className='mt-10 mx-auto w-fit flex flex-wrap gap-2 items-center'>
          <h2 className='w-fit font-semibold text-lg'>Result:</h2>

          {state.map((state, i) => (
            <StateDisplay key={i} state={state} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
