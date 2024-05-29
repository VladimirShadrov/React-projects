import { useState } from 'react';

type FetchingReturn<T extends (...args) => void> = [
  (...args: Parameters<T>) => Promise<void>,
  boolean,
  string
];

export const useFetching = (callback: (...args) => void): FetchingReturn => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function fetchingData(...args: number[]) {

    try {
      setLoading(true);
      await callback(...args);

    } catch (e) {
      setError(e.message);

    } finally {
      setLoading(false);
    }

  }

  return [fetchingData, isLoading, error];
};