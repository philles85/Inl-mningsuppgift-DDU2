// Recommended: All functions declared here
function cityAsk(tag) {
    for (let element of cities) {
        let innerCity = document.createElement("div");
        innerCity.classList.add("cityBox");
        city.appendChild(innerCity);
        innerCity.textContent = element.name;
    }
}
// Recommended: constants with references to existing HTML-elements
const Main = document.querySelector("main");
const table = document.getElementById("table");
const city = document.getElementById("cities");
const insert = prompt("Insert city here!");
const h2 = document.querySelector("h2");

// Recommended: Ask for the city name and then the rest of the code






