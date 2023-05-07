import React,{Component} from "react";
import "./Hourly.css";
// import night from '/Hourly/night.png'



export default function Hourly(){
    return(
        <div className="Container">
            <div className="Time">00:00</div>
            <div className="C1"><div className="Temp">25<p className="deg">o</p></div>
            <div className="iconN"><img className="iconN" src="/Hourly/night.png"/></div></div>

            <div className="Description">Mostly Cloudy</div>
            <div className="iconS" ><img className="iconH" src="/Hourly/humid.png"/><p style={{fontSize:"18px",position:"relative",left:"23%",top:"3px"}}>0%</p></div>
            <div className="iconS"><img className="iconH" src="Hourly/wind.png"/><p style={{fontSize:"18px",position:"relative",left:"23%",top:"3px"}}>4km/h</p></div>
        </div>
    )
}

const hourlyForecast=async () => {
    const lat=17.3753;
    const lon=78.4744;
    const tUrl=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,windspeed_10m,precipitation_probability,weathercode`
    const getHourly=await fetch(tUrl);
    const hourlyResp=await getHourly.json();
    console.log(hourlyResp);
    // console.log(tUrl);
}

hourlyForecast();