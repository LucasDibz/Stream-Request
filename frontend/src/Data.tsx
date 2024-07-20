import { Data } from './@types/Data';

export function StateDisplay({ state }: { state: Data }) {
  return (
    <div className='grid gap-2 bg-slate-200 rounded shadow-md p-4 text-slate-800 font-semibold min-w-44 transition hover:scale-105 hover:cursor-pointer hover:shadow-lg'>
      <span>Status: {state.status}</span>
      <span>Approved: {state.approved}</span>
      <span>Rejected: {state.rejected}</span>
    </div>
  );
}
