import React from "react";
import WeatherContainer from "../../containers/Weather";
import {
  ContentWrapper,
  SearchBox,
  InfoMsg,
  WeatherForcast
} from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <WeatherContainer>
        {({ forcastData, fetchStatus, errorMessage, getWeatherByCity }) => {
          return (
            <ContentWrapper>
              <SearchBox onSearch={getWeatherByCity} />
              <InfoMsg fetchStatus={fetchStatus} errorMessage={errorMessage} />
              <WeatherForcast forcastData={forcastData} />
            </ContentWrapper>
          );
        }}
      </WeatherContainer>
    );
  }
}
