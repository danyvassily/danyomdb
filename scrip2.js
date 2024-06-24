let myParam = new URLSearchParams(window.location.search);
let myId = myParam.get("id");
let apiKey = '8893c53f';
let url = `http://www.omdbapi.com/?i=${myId}&apikey=${apiKey}`;

function myNewCard() {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            localStorage.setItem("details", JSON.stringify(data));
            let Html = `
        <div> 
        <img src="${data.Poster}">
        <h2>${data.Title}</h2>
        <p>${data.Year}</p>
        <p>${data.Genre}</p>
        <p>${data.Plot}</p>
        <p>${data.Director}</p>
        <p>${data.Actors}</p>
        <button id="savefilm"> ajouter au panier </button>
        </div>
    `;
            document.getElementById('details').innerHTML += Html;

            document.getElementById("savefilm").addEventListener("click", function () {
                window.location.href = "trois.html";
            })
        })
        .catch(error => console.error('error', error));
}

myNewCard();

