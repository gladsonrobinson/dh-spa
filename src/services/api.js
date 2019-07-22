const url = `https://api.openweathermap.org/data/2.5/forecast?q=`;

const callApi = async endPoint => {
  try {
    const res = await fetch(endPoint);
    const json = await res.json();
    if (json.cod !== "200") {
      throw json.message;
    } else {
      return json;
    }
  } catch (error) {
    throw error;
  }
};

const _formatJson = data => {
  let crntItemDay = "";
  let filterdList = [];
  let count = 1;
  for (let i = 0; i < data.list.length; i++) {
    let day = new Date(data.list[i].dt_txt).getDate();
    if (crntItemDay) {
      if (crntItemDay !== day) {
        filterdList.push(data.list[i]);
        crntItemDay = day;
        count++;
      }
    } else {
      filterdList.push(data.list[i]);
      crntItemDay = day;
    }
    if (count === 7) break;
  }
  data.list = filterdList;
  return data;
};

export const fetchWeather = searchKey =>
  callApi(
    `${url}${searchKey}&appid=${
      process.env.REACT_APP_OPEN_WEATHER_API_KEY
    }&units=metric`
  ).then(_formatJson);
