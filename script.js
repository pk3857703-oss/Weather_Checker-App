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
      Temp: ${parseFloat(data.main.temp)}°C <br>
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



const hero = document.querySelector("h1");

let angle = 0;
let speed = 0.001; // swing speed

function swing() {
  angle = Math.sin(Date.now() * speed) * 10; // -10deg to +10deg
  hero.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(swing);
}

swing();
