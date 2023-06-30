const test = async function() {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    const resultsPerPage = 50; // Number of results per page
    let pageNumber = 1; // Initial page number
    let allResults = []; // Array to store all results

    try {
        // Fetch data until 1000 results are received or array count reaches 1000
        while (pageNumber <= 47 && allResults.length < 2350) {
            const paginatedUrl = `${url}?limit=${resultsPerPage}&page=${pageNumber}`;
            const response = await fetch(paginatedUrl, options);
            const result = await response.json();

            allResults = allResults.concat(result); // Add current page results to the array
            pageNumber++; // Move to the next page
        }
        
        console.log(allResults.slice(0, 2350)); // Log the first 1000 results
    } catch (error) {
        console.error(error);
    }
}


let results = []
for (let i = 0; i < 47; i++) {
    results.push()
}

test.forEach(ele => {
    this[]
})
////// array of hashes

const test = async function() {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    const resultsPerPage = 50; // Number of results per page
    let pageNumber = 1; // Initial page number
    let allResults = []; // Array to store all results

    try {
        // Fetch data until 1000 results are received or array count reaches 1000
        while (pageNumber <= 47 && allResults.length < 2350) {
            const paginatedUrl = `${url}?limit=${resultsPerPage}&page=${pageNumber}`;
            const response = await fetch(paginatedUrl, options);
            const result = await response.json();

            allResults = allResults.concat(result); // Add current page results to the array
            pageNumber++; // Move to the next page
        }

        const filteredResults = allResults.flatMap(hash => {
            const entries = Object.entries(hash);
            const filteredEntries = entries.filter(([key]) => key.includes('results'));
            const filteredHash = Object.fromEntries(filteredEntries);
            return Object.values(filteredHash);
        });

        const flattenedResults = filteredResults.flat(1);

        console.log(flattenedResults);
    } catch (error) {
        console.error(error);
    }
}

test();

////// THIS IS THE ONE

const test = async function() {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    const resultsPerPage = 50; // Number of results per page
    let pageNumber = 1; // Initial page number
    let allResults = []; // Array to store all results

    try {
        // Fetch data until 1000 results are received or array count reaches 1000
        while (pageNumber <= 47 && allResults.length < 2350) {
            const paginatedUrl = `${url}?limit=${resultsPerPage}&page=${pageNumber}`;
            const response = await fetch(paginatedUrl, options);
            const result = await response.json();

            allResults = allResults.concat(result); // Add current page results to the array
            pageNumber++; // Move to the next page
        }

        const filteredResults = allResults.flatMap(hash => {
            const entries = Object.entries(hash);
            const filteredEntries = entries.filter(([key]) => key.includes('results'));
            const filteredHash = Object.fromEntries(filteredEntries);
            return Object.values(filteredHash);
        });

        const flattenedResults = filteredResults.flat(1);

        const imdbIdResults = flattenedResults.reduce((acc, item) => {
            if (typeof item === 'object' && item !== null && 'imdb_id' in item) {
                acc.push(item['imdb_id']);
            }
            return acc;
        }, []);
        
        console.log(imdbIdResults);
    } catch (error) {
        console.error(error);
    }
}



// const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
// 		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


async function fetchActionMovies() {
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    const resultsPerPage = 588; 
    let pageNumber = 1; 
    let allResults = []; 

    try {
        while (pageNumber <= 47 && allResults.length < 2350) {
            const paginatedUrl = `${url}?limit=${resultsPerPage}&page=${pageNumber}`;
            const response = await fetch(paginatedUrl, options);
            const result = await response.json();

            allResults = allResults.concat(result); 
            pageNumber++; 
        }

        const filteredResults = allResults.flatMap(hash => {
            const entries = Object.entries(hash);
            const filteredEntries = entries.filter(([key]) => key.includes('results'));
            const filteredHash = Object.fromEntries(filteredEntries);
            return Object.values(filteredHash);
        });

        const flattenedResults = filteredResults.flat(1);

        const imdbIdResults = flattenedResults.reduce((acc, item) => {
            if (typeof item === 'object' && item !== null && 'imdb_id' in item) {
                acc.push(item['imdb_id']);
            }
            return acc;
        }, []);
        // console.log(AimdbIdResults)
        // console.log(imdbIdResults);
        return imdbIdResults;
    } catch (error) {
        console.error(error);
    }
}


//   const fetchRatings = async () => {
//     const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//       }
//     };
  
//     const imdbIdResults = await fetchActionMovies(); 
//     // console.log(Array.isArray(imdbIdResults))
//     try {
//         let newArr = []
//        for (let i = 0; i < imdbIdResults.length; i++) {
//             const ratingUrl = `${url}${imdbIdResults[i]}/`;
//             const response = await fetch(ratingUrl, options)
//             const result = await response.json()
//             newArr.push(result)
//         }
//         const filteredRatings = newArr.flatMap(hash => {
//             const entries = Object.entries(hash);
//             const filteredEntries = entries.filter(([key]) => key.includes('results'));
//             const filteredHash = Object.fromEntries(filteredEntries);
//             return Object.values(filteredHash);
//         });
//         console.log(filteredRatings)
//     } catch (error) {
//       console.error(error);
//     }
//   };


  fetchRatings()
  


  const Action = [{"Title": "shaw", "Rating": 5}, {"Title": "batman", "Rating": 6}]

  