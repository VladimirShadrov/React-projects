import { useState } from 'react';
type FetchingReturn = [
  () => Promise<void>,
  boolean,
  string
];

export const useFetching = (callback: () => void): FetchingReturn => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function fetchingData() {
    try {
      setLoading(true);
      await callback();

    } catch (e) {
      setError(e.message);

    } finally {
      setLoading(false);
    }

  }

  return [fetchingData, isLoading, error];
};