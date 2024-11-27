// Recommended: All functions declared here
function createAllCityBoxes() {
    for (let element of cities) {
        let innerCity = document.createElement("div");
        innerCity.classList.add("cityBox");
        city.appendChild(innerCity);
        innerCity.textContent = element.name;
        if (insert == element.name) {
            h2.textContent = insert + " " + "(" + element.country + ")";
            findMatch = true;
            innerCity.classList.add("target");
            document.title = `${insert}`
        }

    }

    if (!findMatch) {
        h2.textContent = insert + " " + "finns inte i databasen";
    }
}

function firstHalf(i, j) {
    let cel = document.createElement("div");
    cel.classList.add("cell");
    table.appendChild(cel);
    cel.style.gridArea = `${i + 2} / ${j + 2}`;
    if (j % 2 == 0) {
        cel.classList.add("even_col");
    }
    if (i % 2 == 0) {
        cel.classList.add("even_row");
    }
    return cel;
}

function secondHalf(j, i, f) {
    let cel2 = document.createElement("div");
    cel2.classList.add("cell");
    table.appendChild(cel2);
    cel2.textContent = Math.round(distances[f].distance / 10);
    cel2.style.gridArea = `${j + 2} / ${i + 2}`;
    if (i % 2 == 0) {
        cel2.classList.add("even_col");
    }
    if (j % 2 == 0) {
        cel2.classList.add("even_row");
    }
    return cel2;
}


// Recommended: constants with references to existing HTML-elements
const Main = document.querySelector("main");
const table = document.getElementById("table");
const city = document.getElementById("cities");
const insert = prompt("Insert city here!");
const h2 = document.querySelector("h2");
let findMatch = false;

// Recommended: Ask for the city name and then the rest of the code


createAllCityBoxes();



for (let k = 0; k < cities.length; k++) {
    let cel = document.createElement("div");
    cel.classList.add("cell");
    table.appendChild(cel);
    cel.textContent = cities[k].id + "-" + cities[k].name;
    cel.style.gridColumn = "1";
    cel.style.gridRow = k + 2;
    if (k % 2 == 0) {
        cel.classList.add("even_row");
        cel.classList.add("head_row");
    }
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



for (let i = 0; i <= 38; i++) {
    let inner = i;
    for (let j = 0; j <= inner; j++) {
        let cel = firstHalf(i, j);
        if (i == j) {
            cel.textContent = " ";
        }
        else {
            for (let f = 0; f < distances.length; f++) {
                if (distances[f].city1 == i && distances[f].city2 == j) {
                    cel.textContent = Math.round(distances[f].distance / 10);
                    let cel2 = secondHalf(j, i, f);
                }
            }
        }
    }
}
