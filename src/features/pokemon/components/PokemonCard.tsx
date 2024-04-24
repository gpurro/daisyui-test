import { Link } from 'react-router-dom';
import { type Pokemon } from '../types/Pokemon';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <>
      <div className="card card-side bg-base-100 ml-2 mt-2 w-96 shadow-xl">
        <figure>
          <img src={pokemon.sprites.front_shiny} alt="Front Shiny" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};
