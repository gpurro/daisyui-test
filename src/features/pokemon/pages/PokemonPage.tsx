import { PokemonsList } from '../components/PokemonsList';
import { usePokemonsList } from '../hooks/usePokemonsList';
import { IconLoading } from '@ui/utils/IconLoading';

export const PokemonPage = () => {
  const { data, loading, error } = usePokemonsList();
  return (
    <>
      {loading && <IconLoading />}
      {error != null && <div>Error</div>}
      {data != null && <pre>Data</pre>}
      {<PokemonsList></PokemonsList>}
    </>
  );
};
