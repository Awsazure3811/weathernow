import "./dailyforecast.css";


export default function DailyForecast(props) {
    const d = new Date(props.time);
    const day=d.toString().slice(0,3);
    const dat=d.toString().slice(4,10);

    const selectDailyFC = () => {
        props.catchClickDate(props.i);
    }

    return(
        <div className="daily-forecast-content" onClick={selectDailyFC}>
            <div className="text">
                <h4>{day}</h4>
            </div>
            <div className="side">
                <h3>{props.temp}<sup><sup>o</sup>C</sup></h3>
                <img src="/icons/sun-48.png" alt="React Logo" className="img" />
            </div>
            <div className="text">
                <p>{dat}</p>
            </div>
        </div>
    )
}