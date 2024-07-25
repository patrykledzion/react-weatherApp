import axios from 'axios'

const API_KEY = process.env.API_KEY
const cordsUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';


export const getCordsByCity = async (cityName) => {
    const res = await axios.get(cordsUrl+
        'q='+cityName+
        '&limit=1'+
        '&appid='+API_KEY
    );

    return {lon: res.data[0].lon, lat: res.data[0].lat}
}

export const getWeatherData = async(cords) =>{

    const res = await axios.get(weatherUrl+
        'lat='+cords.lat + 
        '&lon='+cords.lon + 
        '&units=metric'+ 
        '&appid='+API_KEY 
    )

    return res.data;
}