const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getWeather = () => {
  return fetch(
    `${BASE_URL}/weather?q=Санкт-Петербург&APPID=e777f686efb4d08bd9c2b828888537ee&units=metric&lang=ru`
  ).then(getResponse);
};
