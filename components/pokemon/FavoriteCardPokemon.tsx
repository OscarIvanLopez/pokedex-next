import { Card, Grid } from "@nextui-org/react";

const FavoriteCardPokemon = (pokemonId: number) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card isHoverable={true} isPressable={true} css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
