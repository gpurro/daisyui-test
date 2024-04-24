import { Search } from '@ui/utils/Search';
import { type Pokemon } from '../types/Pokemon';
import { PokemonCard } from './PokemonCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  pokemons: Pokemon[] | undefined;
}

export const PokemonsList = ({ pokemons }: Props) => {
  const url = new URL(window.location.href);
  const q = url.searchParams.get('q') ?? '';

  const [searchText, setSearchText] = useState(q); //
  const navigate = useNavigate();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchText(newValue);
    // navigate to the updated URL
    navigate(`/pokemon?q=${newValue}`, { replace: true });
  };

  const filteredPokemons = searchText
    ? pokemons?.filter((pokemon: Pokemon) => pokemon.name.includes(searchText))
    : pokemons;

  return (
    <>
      <h6>Pokemons List</h6>
      <div className="ml-2 w-96">
        <Search onChange={onSearchChange} initialValue={searchText} />
      </div>

      <div className="flex flex-wrap">
        {filteredPokemons?.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
