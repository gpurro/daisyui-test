import { useState, useEffect } from 'react';
import { getPokemonsList } from '../../../api/apiClient';
import { type PokemonsList } from '../types/Pokemon';

export const usePokemonsList = (url = '') => {
  const [data, setData] = useState<PokemonsList>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getPokemonsList();
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // throw new Error('Help!!');

        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};
