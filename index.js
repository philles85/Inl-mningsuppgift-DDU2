// Recommended: All functions declared here
function cityAsk(tag) {
    for (let element of cities) {
        let innerCity = document.createElement("div");
        innerCity.classList.add("cityBox");
        city.appendChild(innerCity);
        innerCity.textContent = element.name;
        if (tag === element.name) {
            h2.textContent = tag + " " + "(" + element.country + ")";
            findMatch = true;
        }
        if (insert == element.name) {
            innerCity.classList.add("target");
        }
    }
    if (!findMatch) {
        h2.textContent = insert + " " + "finns inte i databasen";
    }

}
// Recommended: constants with references to existing HTML-elements
const Main = document.querySelector("main");
const table = document.getElementById("table");
const city = document.getElementById("cities");
const insert = prompt("Insert city here!");
const h2 = document.querySelector("h2");
let findMatch = false;

// Recommended: Ask for the city name and then the rest of the code






