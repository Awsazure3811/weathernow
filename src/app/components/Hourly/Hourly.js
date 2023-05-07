import React,{Component} from "react";
import "./Hourly.css";
// import night from '/Hourly/night.png'



export default function Hourly(props){
    const description="";
    const rainfall="";
    const wind="";
    console.log(props.temperature_2m);
    return(
        <div className="Container">
            <div className="Time">{props.time}</div>
            <div className="C1"><div className="Temp">{props.temperature_2m}<p className="deg">o</p></div>
            <div className="iconN"><img className="iconN" src="/Hourly/night.png"/></div></div>
            <div className="Description">{description}</div>
            <div className="iconS" ><img className="iconH" src="/Hourly/humid.png"/><p style={{fontSize:"18px",position:"relative",left:"23%",top:"3px"}}>{rainfall}</p></div>
            <div className="iconS"><img className="iconH" src="Hourly/wind.png"/><p style={{fontSize:"18px",position:"relative",left:"23%",top:"3px"}}>{wind}</p></div>
        </div>
    )
}