import { PokemonsList } from '../components/PokemonsList';
import { usePokemons } from '../hooks/usePokemons';
import { IconLoading } from '@ui/utils/IconLoading';

export const PokemonsPage = () => {
  const { pokemonsQuery, pokemons } = usePokemons();
  return (
    <>
      {pokemonsQuery.isLoading && <IconLoading />}
      {pokemonsQuery.isError && <div>Error</div>}
      {<PokemonsList pokemons={pokemons}></PokemonsList>}
    </>
  );
};
