const BASE_URL = 'https://pokeapi.co/api/v2/';

async function callApi(endpoint, options = {}) {

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  pokemons: {
    list(limit,offset) {
      return callApi(`pokemon?limit=${limit}&offset=${offset}`);
    },
    find(name) {
      return callApi(`pokemon/${name}`);
    },
    pokeImg(id){
      return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    },
    getDescription(id){
      return callApi(`pokemon-species/${id}`);
    }
  },
};

export default api;
