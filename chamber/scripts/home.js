const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
const lastModification = document.getElementById("lastModified")
let oLastModif = new Date(document.lastModified);

currentYearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last modified: " + formatDate(lastModifiedDate);
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

async function loadWeather() {
    const apiKey = '5905ae91e1231e40f69bbe8513baa58c';
    const city = 'Kingman';
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    const response = await fetch(weatherURL);
    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather.map(event => event.description.toUpperCase()).join(', ');
    const forecast = await getForecast(apiKey, city);

    document.getElementById('weather-info').innerHTML = `
        <p>Temperature: ${temperature}°F</p>
        <p>Conditions: ${description}</p>
        <p>3-day Forecast: ${forecast}</p>
    `;
}

async function getForecast(apiKey, city) {
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch(forecastURL);
    const data = await response.json();

    const forecast = data.list.slice(0, 3).map(day => {
        return `${day.main.temp_max.toFixed(0)}°F`;
    }).join(', ');

    return forecast;
}

loadWeather();


async function loadSpotlights() {
    try {
        const response = await fetch('./data/members.json'); 
        const members = await response.json();

        // Filter members 
        const goldAndSilver = members.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);
        
        // Select 2-3 random members
        const randomMembers = shuffleArray(goldAndSilver).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = randomMembers.map(member => `
            <div class="spotlight-item">
                <img src="./images/${member.icon}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>Phone: ${member.phone}</p>
                <p>${member.additionalInfo}</p>
                <a href="${member.website}">${member.website}</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

loadSpotlights();
