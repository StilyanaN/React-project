import { useState, useCallback } from 'react';

export const useLoading = (initialState = false) => {
  const [loading, setLoading] = useState(initialState);

  const executeWithLoading = useCallback(async (callback) => {
    setLoading(true);
    try {
      const result = await callback();
      return result;
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, executeWithLoading];
};
