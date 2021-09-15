import React,{useState,useEffect} from 'react';
import './weather.css';
import locationcode from '../services/Geocode';
import currentweather from '../services/currentweather';

const Weather = () => {

    const [location,setLocation] = useState('');
    const [WeatherInfo,setWeatherData] = useState(localStorage.getItem('weatherinfo')?JSON.parse(localStorage.getItem('weatherinfo')):{});
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const code = await locationcode(location);
        const weatherdata = await currentweather(code);
        setWeatherData(weatherdata);
        localStorage.setItem('weatherinfo',JSON.stringify(weatherdata));
       
        
    }

const currenttime = (epoch_time)=>{
    var date = new Date(epoch_time * 1000);
    var date_string = date.toGMTString(); 
    return date_string;
    }


    useEffect(()=>{
        document.getElementById('myTextField').focus();
       
        console.log(WeatherInfo);

    },[])
    return (
        <div className="weather-ui">
            <div className="search">
                <form action="">
                    <input type="text" value={location} id="myTextField" onChange={(e)=>{setLocation(e.target.value)}}/>
                </form>
                <button type="submit" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
                </button>
                
            </div>

            <div className="cityTime">
                <span className="city">{location}</span>
                <span className="time">{currenttime(WeatherInfo[0].EpochTime)}</span>

                <span className="temperature">{WeatherInfo.length?WeatherInfo[0].Temperature.Metric.Value:'Not Found'}&#176;C</span>
                <span className="weather-type">{WeatherInfo.length?WeatherInfo[0].WeatherText:'Not Found'}</span>
            </div>

            <div className="container-1">
            <div className="percipitation">
            <span>Precipitation</span>
            <span>{WeatherInfo.HasPrecipitation?'Yes':'No'}</span>
            </div>

            <div className="vl"></div>

            <div className="uvindex">
            <span>UV index</span>
            <span>Low</span>
            </div>
            </div>

        </div>
    )
}

export default Weather
