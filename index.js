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
        h2.textContent = `${insert} finns inte i databasen`;
        document.title = `Not Found`
    }
}



function firstHalf(city1, city2) {
    let cel = document.createElement("div");
    cel.classList.add("cell");
    table.appendChild(cel);
    cel.style.gridArea = `${city1 + 2} / ${city2 + 2}`;
    if (city1 % 2 == 0) {
        cel.classList.add("even_row");
    }
    if (city2 % 2 == 0) {
        cel.classList.add("even_col");
    }
    return cel;
}

function secondHalf(city2, city1, dist) {
    let cel2 = document.createElement("div");
    cel2.classList.add("cell");
    table.appendChild(cel2);
    cel2.textContent = Math.round(distances[dist].distance / 10);
    cel2.style.gridArea = `${city2 + 2} / ${city1 + 2}`;
    if (city1 % 2 == 0) {
        cel2.classList.add("even_col");
    }
    if (city2 % 2 == 0) {
        cel2.classList.add("even_row");
    }
    return cel2;
}





const Main = document.querySelector("main");
const table = document.getElementById("table");
const city = document.getElementById("cities");
const insert = prompt("Insert city here!");
const h2 = document.querySelector("h2");
let findMatch = false;








Main.style.maxWidth = "100%"

createAllCityBoxes();


for (let element of cities) {
    if (insert == element.name) {
        console.log(element.id, "This is cities id")

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
            console.log(maxDistance, "This is max distance");

            function found1(city) {
                return city.distance == maxDistance && (city.city1 == element.id || city.city2 == element.id);
            }

            let minDistance = Math.min(...distanceCity);
            console.log(minDistance, "This is min distance");

            function found2(city) {
                return city.distance == minDistance && (city.city2 == element.id || city.city1 == element.id);
            }


            let shortest = distances.find(found2);
            let shortestCity1 = shortest.city1;
            let shortestCity = shortest.city2;
            let shortestDistance = shortest.distance;

            console.log(shortest);


            if (shortest.city1 == element.id) {
                let shortestDiv = document.createElement("div");
                shortestDiv.classList.add("cityBox", "closest");
                shortestDiv.textContent = `${cities[shortestCity].name} ligger ${shortestDistance} mil bort`;
                city.appendChild(shortestDiv);
                console.log(`city1: ${shortest.city2}, city2: ${shortest.city1}, distance: ${Math.round(shortest.distance / 10)}`);
            }
            else if (shortest.city2 == element.id) {
                let shortestDiv = document.createElement("div");
                shortestDiv.classList.add("cityBox", "closest");
                shortestDiv.textContent = `${cities[shortestCity1].name} ligger ${Math.round(shortestDistance / 10)} mil bort`;
                city.appendChild(shortestDiv);
                console.log(`city1: ${shortest.city1}, city2: ${shortest.city2}, distance: ${shortest.distance}`);
            }


            let longest = distances.find(found1);
            let longestCity1 = longest.city1;
            let longestCity = longest.city2;
            let longestDistance = longest.distance;

            console.log(longest);

            if (longest.city1 == element.id) {
                let longestDiv = document.createElement("div");
                longestDiv.classList.add("cityBox", "furthest");
                longestDiv.textContent = `${cities[longestCity].name} ligger ${Math.round(longestDistance / 10)} mil bort`;
                city.appendChild(longestDiv);
                console.log(`city1: ${longest.city1}, city2: ${longest.city2}, distance: ${longest.distance}`);
            }
            else if (longest.city2 == element.id) {
                let longestDiv = document.createElement("div");
                longestDiv.classList.add("cityBox", "furthest");
                longestDiv.textContent = `${cities[longestCity1].name} ligger ${Math.round(longestDistance / 10)} mil bort`;
                city.appendChild(longestDiv);
                console.log(`city1: ${longest.city2}, city2: ${longest.city1}, distance: ${longest.distance}`);
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
