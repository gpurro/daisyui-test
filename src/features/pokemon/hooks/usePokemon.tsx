import { apiClient } from '../../../api/apiClient';
import { useQuery } from '@tanstack/react-query';
import { type Pokemon } from '../types';

const getPokemon = async (name: string) => {
  const { data } = await apiClient.get<Pokemon>(`/pokemon/${name}`);
  return data;
};

export const usePokemon = (name: string) => {
  const pokemonQuery = useQuery({
    queryKey: ['pokemons', name],
    queryFn: () => getPokemon(name)
  });

  return { pokemonQuery };
};
