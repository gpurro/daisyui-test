import { Search } from '@ui/utils/Search';
import { type Pokemon } from '../types/Pokemon';
import { PokemonCard } from './PokemonCard';
import { useState } from 'react';

interface Props {
  pokemons: Pokemon[] | undefined;
}

export const PokemonsList = ({ pokemons }: Props) => {
  const [searchText, setSearchText] = useState(''); //

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredPokemons =
    searchText === ''
      ? pokemons
      : pokemons?.filter((pokemon: Pokemon) =>
          pokemon.name.includes(searchText)
        );

  return (
    <>
      <div>Pokemons List</div>
      <div className="ml-2 w-96">
        <Search onChange={onSearchChange} />
      </div>

      <div className="flex flex-wrap">
        {filteredPokemons?.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
