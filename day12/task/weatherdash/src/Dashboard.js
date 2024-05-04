import React, { useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import daycloud from "./assets/01d.png";
import nightcloud from "./assets/01n.png";
import images from "./images";

function Dashboard() {
  const [data, setData] = useState({});
  const [area, setArea] = useState("");
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers: {
      "X-RapidAPI-Key": "382be9b1ca20aa8e83b4cdc885bcdb2f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const weatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=382be9b1ca20aa8e83b4cdc885bcdb2f`;

  const searchArea = (event) => {
    if (event.key === "Enter") {
      axios.get(weatherAPIUrl).then((response) => {
        // alert(response);
        // alert(response.data);
        console.log(response.data);
        setData(response.data);
      });
      //setArea('');
      //
    }
  };

  return (
    <div className="we">
      <h1>Weather Dashboard</h1>
      <br />
      <br />
      <div className="searchCity">
        <input
          className="searchCityText"
          type="text"
          onChange={(event) => setArea(event.target.value)}
          onKeyDown={searchArea}
          placeholder="Enter the city name"
        />
      </div>
      <br />

      <div className="container">
        <div className="top-area">
          Searched Location: {data.name}
        </div>
      </div>
      <div className="weatherSummary">
        <div className="temperatureValue">
          {data.main ? (
            <img src={daycloud} height="60px" width="60px"></img>
          ) : (
            ""
          )}
          <br />
          <b>Temperature:</b> {data.main ? data.main.temp.toFixed(1) : null}{" "}
          <br />
          <b>Feels Like:</b>{" "}
          {data.main ? data.main.feels_like.toFixed(1) : null} <br />
          <b>Pressure:</b> {data.main ? data.main.pressure : null} <br />
          <b>Humidity:</b> {data.main ? data.main.humidity : null} <br />
          
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
