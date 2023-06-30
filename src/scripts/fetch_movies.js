
export async function fetchMovies(arg) {
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
        // console.log(action_data)
        return action_data 


    } catch (error) {
        console.error(error);
    }
}


