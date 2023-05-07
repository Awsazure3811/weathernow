import "./featuredcard.css";

export default function FeaturedCard() {
    

    return(
        <div className="featurecard">
            <div className="card-details">
                <div className="card-details-place">
                    <h1 className="place-heading text-center">Visakhapatnam, AP</h1>
                </div>
                <div className="card-more-details">
                    <p className="text-center">Saturday, 5 May 2023 | Local Time: 07:02 pm</p>
                </div>
            </div>
            <div className="temperature-details">
                <div className="icon-temp-details">
                    <img src="/icons/sun-48.png" alt="icon" className="temp-icon"></img>
                    <div className="temp-details">
                        <h1 className="temp-num">38<sup>*C</sup></h1>
                        <p className="temp-feel">Feels Like: 40</p>
                        <h1 className="text-center mt-2">Clear</h1>
                    </div>
                </div>
                <div className="pre-hum-wi">
                    <div className="pre-hum-wi-text"><img src="/icons/pressure-48-white.png" alt="icon" className="pre-hum-wi-icon"></img> Pressure</div>
                    <div className="pre-hum-wi-text"><img src="/icons/water-48-white.png" alt="icon" className="pre-hum-wi-icon"></img> Humidity</div>
                    <div className="pre-hum-wi-text"><img src="/icons/wind-48-white.png" alt="icon" className="pre-hum-wi-icon"></img> Wind</div>
                </div>
            </div>
        </div>
    )
}