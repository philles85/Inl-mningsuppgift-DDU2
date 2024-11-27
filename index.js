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


for (let element of cities) {
    if (insert == element.name) {
        console.log(element.id)

        let distanceCity = [];

        for (let m = 0; m < distances.length; m++) {

            if (element.id == distances[m].city1) {
                console.log(distances[m].distance);
                distanceCity.push(distances[m].distance);


            }
            if (element.id == distances[m].city2) {
                console.log(distances[m].distance)
                distanceCity.push(distances[m].distance);

            }
        }


        if (distanceCity.length > 0) {
            let maxDistance = Math.max(...distanceCity);
            console.log(maxDistance);

            function found1(city) {
                return city.distance == maxDistance && (city.city1 == element.id || city.city2 == element.id);
            }
            console.log(distances.filter(found1));

            let minDistance = Math.min(...distanceCity);
            console.log(minDistance);

            function found2(city) {
                return city.distance == minDistance && (city.city2 == element.id || city.city1 == element.id);
            }
            console.log(distances.filter(found2));


            let shortest = distances.find(found2);
            let shortestCity1 = shortest.city1;
            let shortestCity = shortest.city2;
            let shortestDistance = shortest.distance;

            if (shortest.city1 == element.id) {
                console.log(`city1: ${shortest.city2}, city2: ${shortest.city1}, distance: ${shortest.distance}`);
                let shortestDiv = document.createElement("div");
                shortestDiv.classList.add("cityBox", "closest");
                shortestDiv.textContent = `${cities[shortestCity].name} ligger ${shortestDistance} mil bort`;
                city.appendChild(shortestDiv);
            }
            else if (shortest.city2 == element.id) {
                console.log(`city1: ${shortest.city1}, city2: ${shortest.city2}, distance: ${shortest.distance}`);
                let shortestDiv = document.createElement("div");
                shortestDiv.classList.add("cityBox", "closest");
                shortestDiv.textContent = `${cities[shortestCity1].name} ligger ${shortestDistance} mil bort`;
                city.appendChild(shortestDiv);
            }


            let longest = distances.find(found1);
            let longestCity1 = longest.city1;
            let longestCity = longest.city2;
            let longestDistance = longest.distance;


            if (longest.city1 == element.id) {
                console.log(`city1: ${longest.city1}, city2: ${longest.city2}, distance: ${longest.distance}`);
                let longestDiv = document.createElement("div");
                longestDiv.classList.add("cityBox", "furthest");
                longestDiv.textContent = `${cities[longestCity].name} Ligger ${longestDistance} mil bort`;
                city.appendChild(longestDiv);
            }
            else if (longest.city2 == element.id) {
                console.log(`city1: ${longest.city2}, city2: ${longest.city1}, distance: ${longest.distance}`);
                let longestDiv = document.createElement("div");
                longestDiv.classList.add("cityBox", "furthest");
                longestDiv.textContent = `${cities[longestCity1].name} Ligger ${longestDistance} mil bort`;
                city.appendChild(longestDiv);
            }



        }

    }
}


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
