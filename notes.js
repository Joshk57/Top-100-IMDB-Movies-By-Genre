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

  import { fetchMovies } from "./fetch_movies"

// export async function createGraph(data) {
//     clearGraph()
//     const barHeight = 35;
//     const marginTop = 30;
//     const marginRight = 0;
//     const marginBottom = 200;
//     const marginLeft = 500;
//     const width = 900;
//     const height = Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

//     const xAxisLabel = "Rating";
//     const yAxisLabel = "Title";
    
//     // const x = d3.scaleLinear()
//     //   .domain([0, d3.max(data, d => d.rating)])
//     //   .range([marginLeft, width - marginRight]);

//     const x = d3.scaleLinear()
//       .domain([0, 10])
//       .range([marginLeft, width - marginRight]);


//     const y = d3.scaleBand()
//       .domain(d3.sort(data, d => -d.rating).map(d => d.title))
//       .rangeRound([marginTop, height - marginBottom])
//       .padding(0.1);

//     const format = x.tickFormat(20, "");

//     const svg = d3.create("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("style", "max-width: 100%; height: auto; font: 20px sans-serif;");
      
//     const container = document.getElementById("chartContainer");
//       container.appendChild(svg.node());
      
//     svg.append("g")
//       .attr("fill", "teal")
//     .selectAll()
//     .data(data)
//     .join("rect")
//       .attr("x", x(0))
//       .attr("y", (d) => y(d.title))
//       .attr("width", (d) => x(d.rating) - x(0))
//       .attr("height", y.bandwidth());

//     svg.append("g")
//       .attr("fill", "white")
//       .attr("text-anchor", "end")
//     .selectAll()
//     .data(data)
//     .join("text")
//       .attr("x", (d) => x(d.rating))
//       .attr("y", (d) => y(d.title) + y.bandwidth() / 2)
//       .attr("dy", "0.35em")
//       .attr("dx", -4)
//       .text((d) => format(d.rating))
//     .call((text) => text.filter(d => x(d.rating) - x(0) < 20) // short bars
//       .attr("dx", +4)
//       .attr("fill", "black")
//       .attr("text-anchor", "start"));

//     svg.append("g")
//       .attr("transform", `translate(0,${marginTop})`)
//       .call(d3.axisTop(x).ticks(width / 80, ""))
//       .call(g => g.select(".domain").remove());


//     svg.append("g")
//       .attr("transform", `translate(${marginLeft},0)`)
//       .call(d3.axisLeft(y).tickSizeOuter(0));

//     svg.append("text")
//       .attr("class", "x-axis-label")
//       .attr("text-anchor", "middle")
//       .attr("x", width / 2)
//       .attr("y", height - marginBottom / 2)
//       .text(xAxisLabel)
    
//     svg.append("text")
//       .attr("class", "y-axis-label")
//       .attr("text-anchor", "middle")
//       .attr("transform", "rotate(-90)")
//       .attr("x", -height / 2)
//       .attr("y", marginLeft / 2)
//       .text(yAxisLabel);
          

//     return svg.node();
// }

export async function createGraph(data) {
  clearGraph();
  const barHeight = 35;
  const marginTop = 100;
  const marginRight = 0;
  const marginBottom = 200;
  const marginLeft = 600;
  const width = 1100;
  const height = Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

  const xAxisLabel = "";
  const yAxisLabel = "Title";
  
  const x = d3.scaleLinear()
    .domain([0, 10])
    .range([marginLeft, width - marginRight]);

  const y = d3.scaleBand()
    .domain(d3.sort(data, d => -d.rating).map(d => d.title))
    .rangeRound([marginTop, height - marginBottom])
    .padding(0.1);

  const format = x.tickFormat(20, "");

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 20px Monday Vacation Sans Serif;");
      
  const container = document.getElementById("chartContainer");
  container.appendChild(svg.node());

  svg.append("g")
    .attr("fill", "teal")
    .selectAll()
    .data(data)
    .join("rect")
    .attr("x", x(0))
    .attr("y", (d) => y(d.title))
    .attr("width", (d) => x(d.rating) - x(0))
    .attr("height", y.bandwidth())
    .on("click", (event, d) => {
        // Handle click event
        loadMovieDescription(d.title);
      });

  svg.append("g")
    .attr("fill", "white")
    .attr("text-anchor", "end")
    .selectAll()
    .data(data)
    .join("text")
    .attr("x", (d) => x(d.rating))
    .attr("y", (d) => y(d.title) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("dx", -4)
    .text((d) => format(d.rating))
    .call((text) => text.filter(d => x(d.rating) - x(0) < 20) // short bars
      .attr("dx", +4)
      .attr("fill", "black")
      .attr("text-anchor", "start"));

  svg.append("g")
    .attr("transform", `translate(0,${marginTop})`)
    .call(d3.axisTop(x).ticks(width / 80, ""))
    .call(g => g.select(".domain").remove())
    .selectAll("text") // Select all the tick labels
    .style("font-size", "18px") // Set the font size
    .style("fill", "white"); // Set the font color


  svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0))
    .selectAll("text") // Select all the tick labels
    .style("font-size", "18px") // Set the font size
    .style("fill", "white"); // Set the font color

  svg.append("text")
    .attr("class", "x-axis-label")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height - marginBottom / 2)
    .text(xAxisLabel)
    .style("font-size", "16")

    
}
function clearGraph() {
    // const message = d3.select("#message")
    // message.remove();
    
    const svg = d3.select('svg');
    svg.remove();
}