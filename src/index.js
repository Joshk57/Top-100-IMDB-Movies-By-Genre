import { fetchMovies } from "./scripts/fetch_movies"
import {createGraph} from "./scripts/create_graph"

document.addEventListener('DOMContentLoaded', () => {

    const actionBtn = document.querySelector("#actionBtn")
    actionBtn.addEventListener("click", async () => {
        const action = await fetchMovies("Action")
        createGraph(action)
    });

    const adventureBtn = document.querySelector("#adventureBtn")
    adventureBtn.addEventListener("click", async () => {
        const adventure = await fetchMovies("Adventure")
        createGraph(adventure)
    });

    const animationBtn = document.querySelector("#animationBtn")
    animationBtn.addEventListener("click", async () => {
        const animation = await fetchMovies("Animation")
        createGraph(animation)
    });
    
    const biographyBtn = document.querySelector("#biographyBtn")
    biographyBtn.addEventListener("click", async () => {
        const biography = await fetchMovies("Biography")
        createGraph(biography)
    });
    
    const comedyBtn = document.querySelector("#comedyBtn")
    comedyBtn.addEventListener("click", async () => {
        const comedy = await fetchMovies("Comedy")
        createGraph(comedy)
    });

    const crimeBtn = document.querySelector("#crimeBtn")
    crimeBtn.addEventListener("click", async () => {
        const crime = await fetchMovies("Crime")
        createGraph(crime)
    });
    
    const dramaBtn = document.querySelector("#dramaBtn")
    dramaBtn.addEventListener("click", async () => {
        const drama = await fetchMovies("Drama")
        createGraph(drama)
    });
    
    const familyBtn = document.querySelector("#familyBtn")
    familyBtn.addEventListener("click", async () => {
        const family = await fetchMovies("Family")
        createGraph(family)
    });

    const fantasyBtn = document.querySelector("#fantasyBtn")
    fantasyBtn.addEventListener("click", async () => {
        const fantasy = await fetchMovies("Fantasy")
        createGraph(fantasy)
    });

    const filmnoirBtn = document.querySelector("#filmnoirBtn")
    filmnoirBtn.addEventListener("click", async () => {
        const filmnoir = await fetchMovies("Film-Noir")
        createGraph(filmnoir)
    });
    
    const horrorBtn = document.querySelector("#horrorBtn")
    horrorBtn.addEventListener("click", async () => {
        const horror = await fetchMovies("Horror")
        createGraph(horror)
    });

    const musicalBtn = document.querySelector("#musicalBtn")
    musicalBtn.addEventListener("click", async () => {
        const musical = await fetchMovies("Musical")
        createGraph(musical)
    });

    const mysteryBtn = document.querySelector("#mysteryBtn")
    mysteryBtn.addEventListener("click", async () => {
        const mystery = await fetchMovies("Mystery")
        createGraph(mystery)
    });

    const romanceBtn = document.querySelector("#romanceBtn")
    romanceBtn.addEventListener("click", async () => {
        const romance = await fetchMovies("Romance")
        createGraph(romance)
    });

    const scifiBtn = document.querySelector("#scifiBtn")
    scifiBtn.addEventListener("click", async () => {
        const scifi = await fetchMovies("Sci-Fi")
        createGraph(scifi)
    });

    const thrillerBtn = document.querySelector("#thrillerBtn")
    thrillerBtn.addEventListener("click", async () => {
        const thriller = await fetchMovies("Thriller")
        createGraph(thriller)
    });

    const warBtn = document.querySelector("#warBtn")
    warBtn.addEventListener("click", async () => {
        const war = await fetchMovies("War")
        createGraph(war)
    });

    const westernBtn = document.querySelector("#westernBtn")
    westernBtn.addEventListener("click", async () => {
        const western = await fetchMovies("Western")
        createGraph(western)
    });
});
