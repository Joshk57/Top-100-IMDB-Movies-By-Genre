class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"

        this.handleClick = this.handleClick.bind(this)
        this.ele.addEventListener('click', this.handleClick)

    
        // console.log(this.fetchTest())
        // console.log(this.fetchActionMovies())
        // console.log(this.fetchAdventureMovies())
        // console.log(this.fetchAnimationMovies())
    }


    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }



    // async fetchGenres() {
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

    //         let genres = []

    //         result.forEach(ele => {
    //             if ((ele["genre"].length > 1) && ())
    //         })

    //         console.log(action_data)
 

    //     } catch (error) {
    //         console.error(error);
    //     }
        

    // }
    async fetchTest() {
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

            let hash = {}
            result.forEach(ele => {
                if (!hash["genre"]) {
                        hash[ele["genre"]] = [ele["title"]]
                    } else {
                        hash[ele["genre"]].push(ele["title"])
                    }
                })
            console.log(hash)
        } catch (error) {
            console.error(error);
        }
    }
    

    async fetchMovies(arg) {
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
            // console.log(result)
            let action_data = []
            

            result.forEach(ele => {
                if (ele["genre"].includes(arg)) {
                    let hash = {}
                    hash["title"] = ele["title"]
                    hash["rating"] = ele["rating"]
                    action_data.push(hash)
                }
                
            })

            console.log(action_data)
 

        } catch (error) {
            console.error(error);
        }
        

    }

    async fetchAdventureMovies() {
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
            // console.log(result)
            let action_data = []
            

            result.forEach(ele => {
                if (ele["genre"].includes("Adventure")) {
                    let hash = {}
                    hash["title"] = ele["title"]
                    hash["rating"] = ele["rating"]
                    action_data.push(hash)
                }
                
            })

            console.log(action_data)


 

        } catch (error) {
            console.error(error);
        }
        

    }

    async fetchAnimationMovies() {
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
            // console.log(result)
            let action_data = []
            

            result.forEach(ele => {
                if (ele["genre"].includes("Animation")) {
                    let hash = {}
                    hash["title"] = ele["title"]
                    hash["rating"] = ele["rating"]
                    action_data.push(hash)
                }
                
            })

            console.log(action_data)


 

        } catch (error) {
            console.error(error);
        }
        

    }

}

export default Example;




// [{genre: [Action, Adventure]}. ]
// let hash = {}
// result.forEach(ele => {
//     if (ele["genre"].length > 1) {
//         const genres = ele["genre"]

//         genres.forEach(ele => {
//             if (!hash["genre"]) {
//                 hash[ele["genre"]] = [ele["title"]]
//             } else {
//                 hash[ele["genre"]].push(ele["title"])
//             }
//         })
//     } else {
//         hash[ele["genre"]] = [ele["title"]]
//     }
// })

// async fetchAllMovies() {
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
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// async fetchActionMovies() {
//     const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//             'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//         }
//     };

//     const resultsPerPage = 50; 
//     let pageNumber = 1; 
//     let allResults = []; 

//     try {
//         while (pageNumber <= 47 && allResults.length < 2350) {
//             const paginatedUrl = `${url}?limit=${resultsPerPage}&page=${pageNumber}`;
//             const response = await fetch(paginatedUrl, options);
//             const result = await response.json();

//             allResults = allResults.concat(result); 
//             pageNumber++; 
//         }

//         const filteredResults = allResults.flatMap(hash => {
//             const entries = Object.entries(hash);
//             const filteredEntries = entries.filter(([key]) => key.includes('results'));
//             const filteredHash = Object.fromEntries(filteredEntries);
//             return Object.values(filteredHash);
//         });

//         const flattenedResults = filteredResults.flat(1);

//         const imdbIdResults = flattenedResults.reduce((acc, item) => {
//             if (typeof item === 'object' && item !== null && 'imdb_id' in item) {
//                 acc.push(item['imdb_id']);
//             }
//             return acc;
//         }, []);

//         console.log(imdbIdResults);
//         return imdbIdResults;
        
//     } catch (error) {
//         console.error(error);
//     }
// }

// async fetchRatings() {
//     const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/';
//     const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//     }
//     };

//     const imdbIdResults = await this.fetchActionMovies(); 
//     // console.log(Array.isArray(imdbIdResults))
//     try {
//         let newArr = []
//     for (let i = 0; i < imdbIdResults.length; i++) {
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
//     console.error(error);
//     }
// };
