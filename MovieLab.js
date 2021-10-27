console.log('hello world')
let message = document.querySelector("#message")

let addMovie = (event) => {
    event.preventDefault()

    let inputField = document.querySelector("input").value;

    let movie = document.createElement("li");

    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField
    movieTitle.addEventListener("click", crossOffMovie)

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button")

    deleteBtn.textContent = 'x'

    deleteBtn.addEventListener("click", deleteMovie)

    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie);

    document.querySelector("input").value = ''
};

let deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

let crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

let movieForm = document.querySelector("form")

movieForm.addEventListener("submit", addMovie)