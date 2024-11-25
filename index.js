// Recommended: All functions declared here
function cityAsk() {
    for (let element of cities) {
        let innerCity = document.createElement("div");
        innerCity.classList.add("cityBox");
        city.appendChild(innerCity);
        innerCity.textContent = element.name;
        if (insert == element.name) {
            h2.textContent = insert + " " + "(" + element.country + ")";
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
cityAsk();


for (let k = 0; k < cities.length; k++) {
    let cel = document.createElement("div");
    cel.classList.add("cell");
    table.appendChild(cel);
    cel.textContent = cities[k].id + "-" + cities[k].name;
    cel.style.gridColumn = "1";
    cel.style.gridRow = k + 2;

}

for (let p = 0; p <= 38; p++) {
    let cel = document.createElement("div");
    cel.classList.add("cell");
    cel.classList.add("head_column")
    table.appendChild(cel);
    cel.textContent = p;
    cel.style.gridRow = "1";
    cel.style.gridColumn = p + 2;

}



for (let i = 1; i <= 38; i++) {
    let inner = i;
    for (let j = 0; j < inner; j++) { }

}