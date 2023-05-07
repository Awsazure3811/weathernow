// import { SearchBox } from "@/app/components/searchbox";
import { useState, useEffect } from "react";
import "./homepage.css";
import Hourly from "src/app/components/Hourly/Hourly.js"
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'



export default function HomePage() {

    // const [weatherData, setWeatherData] = useState(null);
    // const [cityData, setCityData] = useState(null);
    // const [zipData, setZipData] = useState(null);
    // const [OWDData, setOWData] = useState(null);

    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //     try {
    //         const latitude = 37.7749; 
    //         const longitude = -122.4194; 

    //         const zipCode = 530047;

    //         const getWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=relativehumidity_2m`;
    //         //           https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
    //         const findcity = `https://api.opencagedata.com/geocode/v1/json?q=${'visakhapatnam'}&key=c9bf83839ae040cd9d0cba2564056650&language=en&pretty=1`;
    //         const findZip = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`;
    //         const OWUrl = `https://api.openweathermap.org/data/2.5/find?q=${'Visakhapatnam'}&units=imperial&type=accurate&mode=json&APPID=967ea2ee066696f316d6a84ed7e3f80f`;

    //         const weather_response = await fetch(getWeather);
    //         const city_response = await fetch(findcity);
    //         const zip_response = await fetch(findZip);
    //         const OW_response = await fetch(OWUrl);

    //         const weather_data = await weather_response.json();
    //         const city_data = await city_response.json();
    //         const zip_data = await zip_response.json();
    //         const OW_data = await OW_response.json();

    //         setWeatherData(weather_data);
    //         setCityData(city_data);
    //         setZipData(zip_data);
    //         setOWData(OW_data);

    //     } catch (error) {
    //         console.error('Error fetching weather data:', error);
    //     }
    //     };

    //     fetchWeatherData();
    // }, []);

    return(
        <div >
            <div className="container"><input type="text" placeholder="Search city" className="search-box" />
            {/* <SearchBox></SearchBox> */}
            <button onClick={() => {console.log(weatherData)}}>Click</button></div>
            <div><Hourly></Hourly></div>
        </div>
        
    )

}

