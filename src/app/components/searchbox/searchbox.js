import { useState } from "react";
import "./searchbox.css";
import { getCitiesByName } from "countrycitystatejson";

export default function SearchSection() {
    

    

    return(
        <div className="search-content">
            <SearchBox></SearchBox>
            <button className="search-btn"><img src="/icons/search-white.png" className="search-img"></img></button>
            <button className="getlocation-btn search-btn"><img src="/icons/location-50-white.png" className="search-img"></img></button>
        </div>
    )
}

function SearchBox() {
    const [suggestions, setSuggestions] = useState([]);
    function parseSearch(val) {
        const ele = document.getElementById('suggestions-content').style;
        const text = val.target.value;
        if (text.length != 0) {
            ele.display = "block";
            setSuggestions(getCitiesByName(text));
        } else {
            ele.display = "none";
        }
    }
    return(
        <div className="search-content search-suggest">
            <input type="text" placeholder="Search city..." name="search-input" className="search-input" onChange={parseSearch} />
            <GetSuggestion suggestions={suggestions}></GetSuggestion>
        </div>
    )
}

function GetSuggestion({ suggestions }) {
    console.log(suggestions);
    return( 
        <div className="suggestions-content" id="suggestions-content">
        {
        suggestions.map( (city, index) => {
            return (
                <div key={index}>
                    {city.city.name} {'( '}<em>{city.state}, {city.country.name}</em>{' )'}
                </div>
            )
        } )
        }
        </div>
    )
}