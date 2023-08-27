export async function fetchInfo(data) {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
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

        const movie = result.find(ele => ele.title === data.title); 
        let info = [];
        if (movie) {
            info.push(movie.image, movie.title, movie.year, movie.rating, movie.description)
            return info;
        } else {
          console.error('Movie not found');
          return null; 
        };

    } catch (error) {
        console.error(error);
    };
};
