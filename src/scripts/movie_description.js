import {fetchMovies} from "./fetch_movies"




// export async function loadMovieDescription(title) {
//     const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();

        
//         return result

//     } catch (error) {
//         console.error(error);
//     }
// }

export async function loadMovieDescription(title) {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/?title=${encodeURIComponent(title)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      // Extract the information from the API response
      const { description, year, rating, trailer, image } = result;
  
      // Display the information in the modal
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalDescription").textContent = description;
      document.getElementById("modalYear").textContent = year;
      document.getElementById("modalRating").textContent = rating;
      document.getElementById("modalTrailer").href = trailer;
      document.getElementById("modalImage").src = image;
  
      
      // Open the modal
      // You will need to define your own code to show the modal based on your modal implementation
      // For example: document.getElementById("myModal").style.display = "block";
    } catch (error) {
      console.error(error);
    }
  }
  
  async function openModal(title) {
    await loadMovieDescription(title);
  }