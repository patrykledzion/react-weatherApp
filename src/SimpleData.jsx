import React, { useEffect, useState } from "react";
import {getCordsByCity, getWeatherData} from './Functions/ApiHandler'

const SimpleData = ({app}) => {

    const [temperature, setTemperature] = useState(0);
    const [humidity,setHumidity] = useState(0);
    const [pressure,setPressure] = useState(0);
    const [city, setCity] = useState("")
    const [wind,setWind] = useState(null);

    const fetchData = async() => {
        const cords = await getCordsByCity(app.state.searchPhrase);
        const data = await getWeatherData(cords);
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
        setCity(data.name)
        setWind(data.wind);
        console.log(data);
    }

    useEffect(()=>{
        fetchData();
    }, [app.state.searchPhrase])

    return (
        <div className="simple-data">
            <h2>Pogoda dla {city}</h2>
            <div className="simple-data-row">
                <div className="simple-data-tile">
                    <span class='tile-small'>{temperature}</span>
                    <span class='tile-big' style={{fontSize: 110}}>°C</span>
                </div>
                <div className="simple-data-tile">
                    <span class='tile-small'>{humidity}</span>
                    <span class='tile-big' style={{fontSize: 120}}>%</span>
                </div>
            </div>
            <div className="simple-data-row">
                <div className="simple-data-tile">
                <span class='tile-small'>{pressure}</span>
                <span class='tile-big' style={{fontSize: 80}}>hPa</span>

                </div>
                <div className="simple-data-tile">
                    <span class='tile-small'>
                    
                        { 
                            wind!=null ?
                            wind.speed : 0
                        }
                    </span>
                    <span class='tile-big' style={{fontSize: 60}}>km/h</span>
                </div>
            </div>
        </div>
    )
}

export default SimpleData;