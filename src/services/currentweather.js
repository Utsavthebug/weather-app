const base_url = 'http://dataservice.accuweather.com/currentconditions/v1/';
const API_KEY = 'OXhbCNeytO6mqNwINWU0j3SEjtTT4ako';

const currentweather = async (code) => {
    const response = await fetch(`${base_url}/${code}?apikey=${API_KEY}`);
    const data = await response.json();
    return data;
}

export default currentweather;