// import {fetchMovies} from "./fetch_movies"




// // export async function loadMovieDescription(title) {
// //     const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
// //     const options = {
// //         method: 'GET',
// //         headers: {
// //             'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
// //             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// //         }
// //     };

// //     try {
// //         const response = await fetch(url, options);
// //         const result = await response.json();

        
// //         return result

// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// export async function loadMovieDescription(id) {
//     const url = `https://imdb-top-100-movies.p.rapidapi.com/`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       result.forEach(ele => {
//         if (ele["imdb_id"] === id) {
//           console.log(ele["title"])
//         }
//       })

//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   async function openModal(title) {
//     await loadMovieDescription(title);
//   }