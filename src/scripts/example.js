class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"

        this.handleClick = this.handleClick.bind(this)
        this.ele.addEventListener('click', this.handleClick)
    }


    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }
    
}
// const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/cast/';
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

// async function fetchMovieCast() {
//     const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/cast/';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }


export default Example;

