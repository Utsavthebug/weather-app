const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const API_KEY = 'OXhbCNeytO6mqNwINWU0j3SEjtTT4ako';

const locationcode = async (location) => {
    const response = await fetch(`${base_url}?apikey=${API_KEY}&q=${location}`);
    const data = await response.json();
    return data[0].Key;
}

export default locationcode;