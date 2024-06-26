import { apiClient } from '../../../api/apiClient';
import { queryClient } from '../../../api/reactQueryClient';
import { type Pokemon, type NamedAPIResourceList } from '../types';
import { useQuery } from '@tanstack/react-query';

const getPokemons = async (offset: number = 0, limit: number = 10) => {
  const { data } = await apiClient.get<NamedAPIResourceList>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
  const pokemons: Pokemon[] = [];
  const promises: any = [];

  data?.results.forEach((namedAPIResource, index) => {
    const promise = apiClient.get<Pokemon>(`/pokemon/${namedAPIResource.name}`);
    promises.push(promise);
  });

  const responses = await Promise.all(promises);

  responses.forEach((response) => {
    const pokemon: Pokemon = response.data;
    queryClient.setQueryData(['pokemons', pokemon.name], pokemon);
    pokemons.push(pokemon);
  });

  return pokemons;
};

export const usePokemons = () => {
  const pokemonsQuery = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons()
  });

  const pokemons = pokemonsQuery.data;

  return { pokemonsQuery, pokemons };
};
