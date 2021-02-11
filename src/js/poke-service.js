export default class PokeService {
  static async getPokemon(random) {
    const url = `https://pokeapi.co/api/v2/pokemon/${random}/`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return Error(error.message);
    }
  }
}

