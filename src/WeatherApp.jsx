import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Gaya",
        feels_like: 14,
        temp: 15.32,
        tempMin: 15.32,
        tempMax: 15.32,
        humidity: 42,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center"}}>
            <h2>Weather Report by Akash </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}