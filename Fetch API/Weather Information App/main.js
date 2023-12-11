//USER LOCATION
(function () {
  const searchCityValue = document.querySelector(".search-city");
  const searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getLocation(searchCityValue.value);
    searchForm.reset();
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getLocation(null, latitude, longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
})();

function getLocation(city, latitude, longitude) {
  // RECEIVING DATA
  async function loadData() {
    let response = "";
    if (city) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9597a0a9db407aaae8bbaeabd461ee36`
      );
    } else {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9597a0a9db407aaae8bbaeabd461ee36`
      );
    }

    const data = await response.json();
    return data;
  }
  loadData()
    .then((data) => printData(data))
    .catch((err) => {
      console.log(err);
    });

  function timeLoad(obj, el) {
    const { timezone } = obj;
    const currentTime = new Date();
    const gmtTime = new Date(currentTime.getTime() - timezone * 1000);
    const hours = gmtTime.getUTCHours();
    const minutes = gmtTime.getUTCMinutes();
    const ampm = hours <= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    el.innerText = `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  // PRINTING DATA
  function printData(obj) {
    if (obj.message) return createErrorMessage(obj.message);
    const locationTime = document.querySelector(".weather-status h6.time");
    const { temp } = obj.main;

    // SET LOCATION
    const { country } = obj.sys;
    const weatherLocationName = document.querySelector(".weather-status h6");
    weatherLocationName.innerText = obj.name + ", " + country;

    // GET & SET GLOBAL TIME
    timeLoad(obj, locationTime);

    // SET TEMPERATURE
    const weatherLocationTemp = document.querySelector(".showTemp");
    weatherLocationTemp.innerText = `${parseInt(temp - 273.15)}°C`;

    // SET WEATHER CONDITION
    const weatherLocationStatus = document.querySelector(".w-condition");
    weatherLocationStatus.innerText = obj.weather[0].main;

    // CHANGING IMAGE
    const weatherLocationImage = document.querySelector(".weather-status img");
    const iconID = obj.weather[0].icon;
    weatherLocationImage.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

    //SET WIND AND DIRECTION
    const { speed, deg } = obj.wind;
    const windSpeed = document.querySelector(".wind-speed");
    const windDirection = document.querySelector(".wind-direction");
    let direction = "";
    windSpeed.innerText = `${speed} km/h`;

    if (deg >= 0 && deg < 90) {
      direction = "North-East";
    } else if (deg >= 90 && deg < 180) {
      direction = "South-East";
    } else if (deg >= 180 && deg < 270) {
      direction = "South-West";
    } else if (deg >= 270 && deg <= 360) {
      direction = "North-West";
    }
    windDirection.innerText = `${direction}`;

    // SET SUNRISE AND SUNSET
    const printSunrise = document.querySelector(".sunrise");
    const printSunset = document.querySelector(".sunset");

    const { sunrise, sunset } = obj.sys;
    const sunriseTime = new Date(sunrise * 1000);
    printSunrise.innerText = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()} AM`;

    const sunsetTime = new Date(sunset * 1000);
    printSunset.innerText = `${
      sunsetTime.getHours() - 12
    }:${sunsetTime.getMinutes()} PM`;
  }
}

function createErrorMessage(message) {
  const element = document.querySelector(".card-body");
  const span = document.createElement("span");
  span.textContent = message;
  span.className = "text-center text-danger d-block mb-2 text-capitalize";
  span.style.fontSize = "14px";
  span.style.fontWeight = "700";
  element.prepend(span);
  setTimeout(() => span.remove(), 3000);
}
