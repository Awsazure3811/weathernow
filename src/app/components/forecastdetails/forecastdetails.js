import "./forecastdetails.css";

export default function ForecastDetails() {
    
    return(
        <div className="forecastdetails-content">
            <div className="details-left">
                <div className="forecast-day-details">SUN <sup>6 May</sup></div>
                <div className="fc-more-details">
                    <div className="detials"><h1>Max temperature:</h1><div className="mr-auto"></div><p className="details-value">30<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Min temperature:</h1><div className="mr-auto"></div><p className="details-value">30<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Rainfall:</h1><div className="mr-auto"></div><p className="details-value">30<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Sunrise:</h1><div className="mr-auto"></div><p className="details-value">30<sup><sup>o</sup>C</sup></p></div>
                    <div className="detials"><h1>Sunset:</h1><div className="mr-auto"></div><p className="details-value">30<sup><sup>o</sup>C</sup></p></div>
                </div>
            </div>
            <div className="details-right">
                <img src="/icons/sun-48.png" className="details-img"></img>
                <div className="temp-more-details">
                    <h1 className="details-temp">38<sup><sup>o</sup>C</sup></h1>
                    <p className="feellike-p">Feels like: 40</p>
                    <p>Clear</p>
                </div>
            </div>
        </div>
    )
}