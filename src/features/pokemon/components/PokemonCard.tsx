interface Props {
  name: string;
}
export const PokemonCard = ({ name }: Props) => {
  return <div>{name}</div>;
};
