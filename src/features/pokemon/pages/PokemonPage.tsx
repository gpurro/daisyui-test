import { PokemonCard } from '../components/PokemonCard';
import { usePokemon } from '../hooks/usePokemon';
import { useParams } from 'react-router-dom';

export const PokemonPage = () => {
  const { name } = useParams() as { name: string };
  const { pokemonQuery } = usePokemon(name);
  const pokemon = pokemonQuery.data;

  return (
    <>
      <h6>Pokemon Page</h6>
      {pokemon && <PokemonCard pokemon={pokemon}></PokemonCard>}
    </>
  );
};
