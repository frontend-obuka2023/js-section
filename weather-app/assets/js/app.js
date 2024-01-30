const btnSubmit = document.querySelector('.js-weather-data-wrapper__submit-button');
const temperatureData = document.querySelector('.js-weather-data-wrapper__forecast-temp');
const descriptionData = document.querySelector('.js-weather-data-wrapper__forecast-desc');
const iconData = document.querySelector('.js-weather-data-wrapper__weather-image');
const locationData = document.querySelector('.js-weather-data-wrapper__forecast-location');
const locationInput = document.querySelector('.js-weather-data-wrapper__location-input');

const API_KEY = '7a19a02025bd5154c66049a41243e8c3'; // ! svako ima svoj API_KEY
const API_URL = 'http://api.weatherstack.com/current';

// ! ASYNC - AWAIT pristup
// const getWeatherDataForCity = async (city) => {
//     try {
//         //http://api.weatherstack.com/current?access_key=7a19a02025bd5154c66049a41243e8c3&query=New York
//         const endPoint = `${API_URL}?access_key=${API_KEY}&query=${city}`;
//         const response = await fetch(endPoint); // ovo takodje vraca neki promise
//         const weatherData = await response.json();

//         const {temperature, weather_descriptions, weather_icons} = weatherData.current;
//         const {country, region, name} = weatherData.location;
//         temperatureData.textContent = `${temperature} C`;
//         descriptionData.textContent = weather_descriptions[0];
//         iconData.src = weather_icons[0];
//         locationData.textContent = `${name} (${region}), ${country}`;
//     } catch (error) {
//         console.log(error);
//     }
// }

// ! THEN - CATCH pristup
const getWeatherDataForCity = (city) => {
    const endPoint = `${API_URL}?access_key=${API_KEY}&query=${city}`;
    fetch(endPoint)
        .then(response => {
            response.json()
                .then(weatherData => {
                    const {temperature, weather_descriptions, weather_icons} = weatherData.current;
                    const {country, region, name} = weatherData.location;
                    temperatureData.textContent = `${temperature} C`;
                    descriptionData.textContent = weather_descriptions[0];
                    iconData.src = weather_icons[0];
                    locationData.textContent = `${name} (${region}), ${country}`;
                }).catch(error => console.log(error));
        }).catch(error => console.log(error));
}

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeatherDataForCity(locationInput.value); // 1. resenje
    }
});

btnSubmit.addEventListener('click', () => {
    const inputVal = locationInput.value; // 2. resenje
    getWeatherDataForCity(inputVal);
});


// TODO Domaci:

/**
 * 1. Re-faktorisati metodu getWeatherDataForCity uz pomocu THEN i CATCH metoda
 * 2. Testirati ponovo da li radi
 */