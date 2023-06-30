// import Example from './scripts/example';
// import ActionMovies from "./scripts/action_movies"
import { fetchMovies } from "./scripts/fetch_movies"
import {createGraph} from "./scripts/create_graph"


document.addEventListener('DOMContentLoaded', () => {


    const main = document.getElementById('main')
    // console.log(fetchMovies("Action"))
    // console.log("Hello World!")

  
    const actionBtn = document.querySelector("#actionBtn")
    actionBtn.addEventListener("click", async () => {
        // fetchMovies("Action");
        const action = await fetchMovies("Action")
        // console.log(action)
        createGraph(action)
    
    })

    const adventureBtn = document.querySelector("#adventureBtn")
    adventureBtn.addEventListener("click", async () => {
        const adventure = await fetchMovies("Adventure")
        createGraph(adventure)
    })

    const animationBtn = document.querySelector("#animationBtn")
    animationBtn.addEventListener("click", async () => {
        const animation = await fetchMovies("Animation")
        createGraph(animation)
    })

    const fantasyBtn = document.querySelector("#fantasyBtn")
    fantasyBtn.addEventListener("click", async () => {
        const fantasy = await fetchMovies("Fantasy")
        createGraph(fantasy)
    })

    const horrorBtn = document.querySelector("#horrorBtn")
    horrorBtn.addEventListener("click", async () => {
        const horror = await fetchMovies("Horror")
        createGraph(horror)
    })

})
