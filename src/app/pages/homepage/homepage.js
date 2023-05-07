// import { SearchBox } from "@/app/components/searchbox";
import { useState, useEffect } from "react";
import "./homepage.css";
import Hourly from "src/app/components/Hourly/Hourly.js"
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'


import FeaturedCard from "@/app/components/featuredcard/featuredcard";
import SearchSection from "@/app/components/searchbox/searchbox";
import DailyForecast from "@/app/components/dailyforecast/dailyforecast";
// import ForecastDetails from "@/app/components/forecastdetails/ForecastDetails";
import ForecastDetails from "@/app/components/forecastdetails/forecastdetails";
import HourlyFunction from "@/app/components/hourlyforecast/hourlyforecast";
// import { getCitiesByName } from "countrycitystatejson";

export default function HomePage() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const getLocation = () => {
        
        useEffect(() => {
            // Check if browser supports geolocation
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                },
                (error) => {
                console.log(error.message);
                }
            );
            } else {
            console.log('Geolocation is not supported by this browser.');
            }
        }, []);
    }
    getLocation();
    

    console.log(latitude);
    console.log(longitude);

    const [tmmp,setTmmp]=useState([]);
    const [time,setTime]=useState([]);
    const [code,setCode]=useState([]);

    const get_data=async (p1,p2,humid,press,fell_like,weather) => {
        console.log(p1,p2);
        const tUrl=`https://api.open-meteo.com/v1/forecast?latitude=${p1}&longitude=${p2}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,weathercode,sunrise,sunset,windspeed_10m_max,uv_index_max&timezone=auto`;
        const object=await fetch(tUrl);
        console.log("data fetch done");
        console.log(object);
        const dict=await object.json();
        const data=dict["daily"];
        const temp=data["temperature_2m_max"];
        const time=data["time"];
        const code=data["weathercode"];
        const wspeed=data["windspeed_10m_max"];
        featue_relpy(temp[0],code[0],fell_like,press,humid,wspeed[0],time[0],weather);
        setTmmp(temp);
        setTime(time);
        setCode(code);
        console.log(wspeed);
    }
    
    
    const [temp,setTemp]=useState(null);
    const [wecode,setWecode]=useState(null);
    const [fell_like,setFell_like]=useState(null);
    const [pressure,setPressure]=useState(null);
    const [humidity,setHumidity]=useState(null);
    const [wind,setWind]=useState(null);   
    const [ftime,setFtime]=useState(null);  
    const [weather, setWeather]=useState(null);

    const featue_relpy= async(temp,wecode,fell_like,pressure,humidity,wind,time,weather) =>{
        setTemp(temp);
        setWecode(wecode);
        setFell_like(fell_like);
        setPressure(pressure);
        setHumidity(humidity);
        setWind(wind);
        setFtime(time);
        setWeather(weather);
    }
    
    const getcoord=async (p) => {
        console.log(p);
        const tUrl=`https://api.openweathermap.org/data/2.5/find?q=${p}&units=imperial&type=accurate&mode=json&APPID=967ea2ee066696f316d6a84ed7e3f80f`;
        const object=await fetch(tUrl);
        console.log("data fetch done");
        console.log(object);
        const dict=await object.json();
        console.log(dict["list"]["0"]);
        const weather = dict["list"]["0"]["weather"]["main"];
        const lang=dict["list"]["0"]["coord"]["lat"];
        const long=dict["list"]["0"]["coord"]["lon"];
        const humid=dict["list"]["0"]["main"]["humidity"];
        const pressure=dict["list"]["0"]["main"]["pressure"];
        const win_spd=dict["list"]["0"]["wind"]["speed"];
        const fell_like=dict["list"]["0"]["main"]["feels_like"];
        get_data(lang,long,humid,pressure,fell_like, weather);
    
    }

    const [featureData, setFeatureData] = useState([]);
    const getSearchData = (val) => {
        setFeatureData(val);
        getcoord(val[0]);
    }

    return(
        <div className="container">
            {/* <button onClick={sample}>Clickme</button> */}
            <div className="search-section-wrapper">
                <SearchSection getSearchData={getSearchData}></SearchSection>
            </div>
            <div className="featurecard-wrapper">
                <FeaturedCard featureData={featureData} temp={temp} wecode={wecode} weather={weather} time={ftime} fell_like={fell_like} pressure={pressure} humidity={humidity} wind={wind}></FeaturedCard>
            </div>
            <div className="forecast-section">
                <div className="forecast-wrapper">
                    <div className="daily-forecast-wrapper">
                        <DailyForecast temp={tmmp[1]} time={time[1]} code={code[1]}></DailyForecast>
                        <DailyForecast temp={tmmp[2]} time={time[2]} code={code[2]}></DailyForecast>
                        <DailyForecast temp={tmmp[3]} time={time[3]} code={code[3]}></DailyForecast>
                        <DailyForecast temp={tmmp[4]} time={time[4]} code={code[4]}></DailyForecast>
                        <DailyForecast temp={tmmp[5]} time={time[5]} code={code[5]}></DailyForecast>
                        <DailyForecast temp={tmmp[6]} time={time[6]} code={code[6]}></DailyForecast>
                    </div>
                    {/* <div className="hourly-forecast-wrapper daily-forecast-wrapper">
                    {
                        arr1.map((val1,index)=>{
                            return <HourlyFunction text={val1} key={index}></HourlyFunction>  
                        })
                    }
                    </div> */}
                </div>
                <div className="forecast-more-details">
                    <ForecastDetails></ForecastDetails>
                </div>
            </div>
        </div>
        
    )
}