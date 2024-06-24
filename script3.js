document.addEventListener("DOMContentLoaded", function () {
    let details = localStorage.getItem("details");
    if (details) {
        let film = JSON.parse(details);
        let html = `
        <div> 
        <img src="${film.Poster}" alt="Poster">
        <h2>${film.Title}</h2>
        <p>${film.Year}</p>
        <p>${film.Genre}</p>
        <p>${film.Plot}</p>
        <p>${film.Director}</p>
        <p>${film.Actors}</p>
        <button id="retire">retirer la carte</button>
        </div>
    `;

        document.getElementById("card").innerHTML += html;

        document.getElementById("retire").addEventListener("click", function () {
            localStorage.removeItem("details");
            alert("film enlever du panier");
            document.getElementById("card").innerHTML = "";
        });
    } else {
        console.error("pas d'information sur le film");
    }
});
