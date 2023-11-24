import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import "./app.css"

function App() {
    const [city, setCity] = useState('');
    const cities = ['', 'Bogotá', 'Boston', 'Edimburgh', 'London', 'Lisboa', 'Munich', 'Shangai', 'Toronto', 'New York', 'Paris', 'Riad', 'Tokyo'];
    const [url, setUrl] = useState('');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6c544409bmsh2e3117d78605cfdp1a964ajsnda5863368687',
            'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
        }
    };

    const { data, loading, error, handleFetch, handleCancelRequest} = useFetch(url, options);
    console.log(data)

    const handleCityChange = async (e) => {
        const selectedCity = e.target.value
        setCity(selectedCity);
        const newUrl = `https://weather-api99.p.rapidapi.com/weather?city=${selectedCity}`;
        setUrl(newUrl);
        handleCancelRequest();
        await handleFetch(newUrl, options);
    };

    let mainData = null;
    if (data) {
        mainData = data.main;
    }

    console.log(city)

    return (
        <div className="App" >
            <h1>API weather</h1>
            <button onClick={handleCancelRequest}>
                Cancel request
            </button>
            <div>
                <label htmlFor="citySelect">Choose a city:  </label>
                <select id="citySelect" value={city} onChange={handleCityChange}>
                    {cities.map((cityName) => (
                        <option key={cityName} value={cityName}>
                            {cityName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="card">
                <ul>
                    {error && <li>Error: {error}</li>}
                    {loading && <li>Waiting choose...</li>}
                    {data && (
                        <>
                            <li key={data.id}> City: {data.name} - {data.sys.country}</li>
                            <li>Feels like: {mainData.feels_like}</li>
                            <li>Humidity: {mainData.humidity}</li>
                            <li>Pressure: {mainData.pressure}</li>
                            <li>Temperature: {mainData.temp}</li>
                            <li>Temperature max: {mainData.temp_max}</li>
                            <li>Temperature min: {mainData.temp_min}</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App
