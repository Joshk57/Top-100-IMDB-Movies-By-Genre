// import Example from './scripts/example';
// import ActionMovies from "./scripts/action_movies"
import { fetchMovies } from "./scripts/fetch_movies"


document.addEventListener('DOMContentLoaded', () => {


    const main = document.getElementById('main')
    // console.log(fetchMovies("Action"))
    // console.log("Hello World!")

    // fetchActionMovies()

    const actionBtn = document.querySelector("#actionBtn")
    actionBtn.addEventListener("click", () => {

        fetchMovies("Action");
    })

    const adventureBtn = document.querySelector("#adventureBtn")
    adventureBtn.addEventListener("click", () => {
        fetchMovies("Adventure")
    })

    const animationBtn = document.querySelector("#animationBtn")
    animationBtn.addEventListener("click", () => {
        fetchMovies("Animation")
    })

    const fantasyBtn = document.querySelector("#fantasyBtn")
    fantasyBtn.addEventListener("click", () => {
        fetchMovies("fantasyBtn")
    })

    const horrorBtn = document.querySelector("#horrorBtn")
    horrorBtn.addEventListener("click", () => {
        fetchMovies("Horror")
    })

})
