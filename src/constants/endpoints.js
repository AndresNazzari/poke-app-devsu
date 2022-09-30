const URL = 'https://bp-pokemons.herokuapp.com';

export default {
  GET_POKEMONS: `${URL}/`, //?idAuthor=1  - number  Gets the entire Pokémon list
  GET_POKEMON: `${URL}/`, // /:id Gets the specified Pokémon by ID
  POST_POKEMON: `${URL}/`, //Creates a new Pokémon with the given data
  PUT_POKEMON: `${URL}/`, // /:id Updates the Pokémon with the specified ID, with the given data
  DELETE_POKEMON: `${URL}/`, // /:id Deletes the Pokémon with the specified ID
};
