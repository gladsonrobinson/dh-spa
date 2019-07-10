import React from "react";
import "./wrapper.css";
import PropTypes from "prop-types";
import { format } from "date-fns";

const WeatherForcastListItem = ({ item }) => {
  return (
    <div className="weather-forcast-list__items">
      <div className="weather-forcast-list__item">
        {format(new Date(item.dt_txt), "ddd D MMM")}
        <p>
          <img
            alt={item.weather[0].description}
            className="weather-forcast-list__item__icon"
            src={`//openweathermap.org/img/w/${item.weather[0].icon}.png`}
          />
        </p>
      </div>
      <div className="weather-forcast-list__item">
        <p>
          <span>{item.weather[0].main}</span>
        </p>
        <p>
          <span className="weather-forcast-list__min">
            {item.main.temp_min}
          </span>
          <span className="weather-forcast-list__max">
            {item.main.temp_max}
          </span>
        </p>
      </div>
    </div>
  );
};

const WeatherForcast = ({ forcastData }) => {
  return (
    <div className="weather-forcast-list">
      <div className="weather-forcast-list__grid">
        {forcastData.map(item => {
          return <WeatherForcastListItem key={item.dt} item={item} />;
        })}
        <div />
      </div>
    </div>
  );
};

WeatherForcastListItem.propTypes = {
  item: PropTypes.object.isRequired
};

WeatherForcast.propTypes = {
  forcastData: PropTypes.array.isRequired
};

export default WeatherForcast;
