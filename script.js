
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    let reqMovie = document.getElementById('inputField').value;
    console.log('value is:', reqMovie);

    let apiKey = '8893c53f';
    let url = 'http://www.omdbapi.com/?s=' + reqMovie + '&apiKey=' + apiKey;

    fetchFilm(url);
});

function fetchFilm(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let movie = data.Search;
       

            document.getElementById('Content').innerHTML = '';

            for (let myMovie of movie) {
                let Html = `
            <article>
              <img src="${myMovie.Poster}" alt="${myMovie.Title}">
              <h2>${myMovie.Title}</h2>
              <p>${myMovie.Year}</p>
              <a href = "./select.html?id=${myMovie.imdbID}" > More Info </a>
            </article>
          `;
                document.getElementById('Content').innerHTML += Html;
            }
            
        })
        .catch(error => console.error('error', error));
}

 
