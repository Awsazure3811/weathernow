import "./dailyforecast.css";

export default function DailyForecast() {

    return(
        <div className="daily-forecast-content">
            <div className="text">
                <h4>SUN</h4>
            </div>
            <div className="side">
                <h3>33<sup><sup>o</sup>C</sup></h3>
                <img src="/icons/sun-48.png" alt="React Logo" className="img" />
            </div>
            <div className="text">
                <p>07 May</p>
            </div>
        </div>
    )
}