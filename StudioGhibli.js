const baseURL = 'https://ghibliapi.herokuapp.com/films';

// defining results section
const results = document.querySelector('.results');

async function fetchResults() {
    await fetch(baseURL)
    .then(function(result) {
        return result.json();
    })
    .then(function(data) {
        displayResults(data);
    })
}

function displayResults(data) {
    console.log(data);
    for (let film of data) {
        let title = document.createElement('h2');
        let originalTitle = document.createElement('h3');
        let director = document.createElement('strong');
        let description = document.createElement('p');
        let releaseDate = document.createElement('span');

        title.innerText = film.title
        originalTitle.innerText = film.original_title
        director.innerText = 'Director: ' + film.director
        description.innerText = film.description
        releaseDate.innerText = ' Release date: ' + film.release_date


        results.appendChild(title)
        results.appendChild(originalTitle)
        results.appendChild(director)
        results.appendChild(description)
        results.appendChild(releaseDate)
    }
}

fetchResults();