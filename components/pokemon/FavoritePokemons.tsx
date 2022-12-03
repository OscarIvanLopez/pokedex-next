import { Grid } from "@nextui-org/react";
import FavoriteCardPokemon from "../pokemon/FavoriteCardPokemon";

const FavoritePokemons = (pokemons: number[]) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
