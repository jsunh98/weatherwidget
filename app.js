const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const API_Key = '151a0d84d658e33a1c06066e42f0cd49';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?=q${city}
        &units=metric&appid=${API_Key}`).then(repsonse => response.json()).then
        (json => {

            if(json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humdity span');
            const wind = document.querySelector('.weather-details .wind span');

            swith (json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png'
            }
        });
}