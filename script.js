async function getWeather() {

    const city = document.querySelector("#inp").value;

   const response = await fetch(`https://weather-checker-app-backend.onrender.com/weather?city=${city}`);
    const data = await response.json();

    console.log(data); // IMPORTANT: check in browser console

    if (data.cod == "404") {
        document.querySelector("#show").innerHTML = "City Not Found!!";
        return;
    }

    document.querySelector("#show").innerHTML = `
      City: ${data.name}
      Temp: ${data.main.temp}°C
      Weather: ${data.weather[0].description}
    `;
}

document.querySelector("#btn").addEventListener("click", (e) => {
    e.preventDefault();
    getWeather();
});

document.querySelector("#inp").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});
