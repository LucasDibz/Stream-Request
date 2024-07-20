import { useState } from 'react';
import { Data } from '../@types/Data';
import { fetchStreamData } from '../utils/fetchStream';

export function useStreamData() {
  const [state, setState] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    // Reset State
    setState([]);
    setLoading(true);

    for await (const chunk of fetchStreamData()) {
      console.log({ chunk });
      setState((state) => [...state, chunk]);
    }

    setLoading(false);
  }

  return [fetchData, { state, loading }] as const;
}
