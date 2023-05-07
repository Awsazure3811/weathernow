// import { SearchBox } from "@/app/components/searchbox";
import { useState, useEffect } from "react";
import "./homepage.css";
<<<<<<< HEAD
import Hourly from "src/app/components/Hourly/Hourly.js"
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'


=======
import FeaturedCard from "@/app/components/featuredcard/featuredcard";
import SearchSection from "@/app/components/searchbox/searchbox";
import DailyForecast from "@/app/components/dailyforecast/dailyforecast";
// import { getCitiesByName } from "countrycitystatejson";
>>>>>>> 0cedf493ab824977705345c101778c19b3c6c704

export default function HomePage() {

    // const [weatherData, setWeatherData] = useState(null);
    // const [cityData, setCityData] = useState(null);
    // const [zipData, setZipData] = useState(null);
    // const [OWDData, setOWData] = useState(null);

    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //     try {
<<<<<<< HEAD
    //         const latitude = 37.7749; 
    //         const longitude = -122.4194; 
=======
            // const latitude = 37.7749; 
            // const longitude = -122.4194; 
>>>>>>> 0cedf493ab824977705345c101778c19b3c6c704

    //         const zipCode = 530047;

<<<<<<< HEAD
    //         const getWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=relativehumidity_2m`;
    //         //           https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
    //         const findcity = `https://api.opencagedata.com/geocode/v1/json?q=${'visakhapatnam'}&key=c9bf83839ae040cd9d0cba2564056650&language=en&pretty=1`;
    //         const findZip = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`;
    //         const OWUrl = `https://api.openweathermap.org/data/2.5/find?q=${'Visakhapatnam'}&units=imperial&type=accurate&mode=json&APPID=967ea2ee066696f316d6a84ed7e3f80f`;
=======
            // const getWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=relativehumidity_2m`;
            // //           https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
            // const findcity = `https://api.opencagedata.com/geocode/v1/json?q=${'visakhapatnam'}&key=c9bf83839ae040cd9d0cba2564056650&language=en&pretty=1`;
            // const findZip = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`;
            // const OWUrl = `https://api.openweathermap.org/data/2.5/find?q=Hyderabad&units=imperial&type=accurate&mode=json&APPID=967ea2ee066696f316d6a84ed7e3f80f`;
>>>>>>> 0cedf493ab824977705345c101778c19b3c6c704

    //         const weather_response = await fetch(getWeather);
    //         const city_response = await fetch(findcity);
    //         const zip_response = await fetch(findZip);
    //         const OW_response = await fetch(OWUrl);

    //         const weather_data = await weather_response.json();
    //         const city_data = await city_response.json();
    //         const zip_data = await zip_response.json();
    //         const OW_data = await OW_response.json();

<<<<<<< HEAD
    //         setWeatherData(weather_data);
    //         setCityData(city_data);
    //         setZipData(zip_data);
=======
            // setWeatherData(weather_data);
            // setCityData(city_data);
            // setZipData(zip_data);
>>>>>>> 0cedf493ab824977705345c101778c19b3c6c704
    //         setOWData(OW_data);

    //     } catch (error) {
    //         console.error('Error fetching weather data:', error);
    //     }
    //     };

    //     fetchWeatherData();
    // }, []);

    // const [suggestions, setSuggestions] = useState([]);

    // const parseSearch = (val) => {
    //     const searchText = val.target.value;
    //     // console.log(searchText.length);
    //     if (searchText.length > 3) {
    //         const searchCityData = async () => {
    //             try {
    //                 const url = `https://api.openweathermap.org/data/2.5/find?q=${searchText}&units=imperial&type=accurate&mode=json&APPID=967ea2ee066696f316d6a84ed7e3f80f`;
    //                 const response = await fetch(url);
    //                 const data = await response.json();
    //                 if (data) {
    //                     console.log(data.list);
    //                     const dataList = data.list;
    //                     // dataList.map((value) => { setSuggestions([...new Set(suggestions), value.sys.country]) });
                        
    //                 }
    //             } catch (error) {
    //                 // console.log('Error fetching weather data: ', error);
    //                 const eeer = true;
    //             }
    //             }
    //             searchCityData();
    //     }
        
    // }
    // console.log(suggestions);

    // function sample() {
        // const date = new Date();
        // console.log(date.getMilliseconds());
        // console.log(getCitiesByName('And'));
        // console.log(date.getMilliseconds());

    // }

    


    return(
<<<<<<< HEAD
        <div >
            <div className="container"><input type="text" placeholder="Search city" className="search-box" />
            {/* <SearchBox></SearchBox> */}
            <button onClick={() => {console.log(weatherData)}}>Click</button></div>
            <div><Hourly></Hourly></div>
=======
        <div className="container">
            {/* <button onClick={sample}>Clickme</button> */}
            <div className="search-section-wrapper">
                <SearchSection></SearchSection>
            </div>
            <div className="featurecard-wrapper">
                <FeaturedCard></FeaturedCard>
            </div>
            <div className="daily-forecast-wrapper">
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
                <DailyForecast></DailyForecast>
            </div>
>>>>>>> 0cedf493ab824977705345c101778c19b3c6c704
        </div>
        
    )

}

