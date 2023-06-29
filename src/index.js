import Example from './scripts/example';


document.addEventListener('DOMContentLoaded', () => {
    // fetchActionMovies()

    const main = document.getElementById('main')
    new Example(main)
    console.log("Hello World!")
})
// console.log(fetchActionMovies()[0])

// async function fetchMovie() {
//     const urls = ['https://moviesminidatabase.p.rapidapi.com/movie/id/tt0468569/', 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167260/'];
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(urls, options);
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function fetchActionMovies() {
//     const urls = [
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0468569/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167260/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1375666/', 
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0120737/', 
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167261/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0133093/', 
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0080684/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt10189514/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0076759/',
//       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0103064/'

//     ];
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
//         'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const requests = urls.map(url => fetch(url, options));
//       const responses = await Promise.all(requests);
//       const results = await Promise.all(responses.map(response => response.json()));

//       let hash = {}
//       let arr = []

//       for (let i = 0; i < 10; i++) {
//         const title = results[i].results.title
//         arr.push(hash[title] = results[i].results.rating)
//       }

//       console.log(arr);
//       console.log(arr[4])
//     } catch (error) {
//       console.error(error);
//     }
//   }



  

async function fetchActionMovies() {
    const url = 'https://rapidapi.com';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
  
    try {
      const request = urls.map(url => fetch(url, options));
      const responses = await Promise.all(requests);
      const results = await Promise.all(responses.map(response => response.json()));

      let hash = {}
      let arr = []

      for (let i = 0; i < 10; i++) {
        const title = results[i].results.title
        arr.push(hash[title] = results[i].results.rating)
      }

      console.log(arr);
      console.log(arr[4])
    } catch (error) {
      console.error(error);
    }
  }



  // async function fetchAdventureMovies() {
  //   const urls = [
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167260/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1375666/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0120737/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0060196/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167261/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0080684/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0816692/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0076759/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0245429/',
  //       'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0172495/'
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchAnimationMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0245429/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110357/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0095327/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt4633694/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt5311514/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0910970/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt2380307/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0119698/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0114709/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1049413/'
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchBiographyMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0108052/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0099685/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0253474/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1675434/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt8503618/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt5074352/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt6316138/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0112573/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0086879/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0056172/'
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchComedyMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0118799/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0088763/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1675434/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt4633694/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt2380307/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0057012/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1187043/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0114709/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0211915/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1049413/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchCrimeMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0068646/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0468569/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0071562/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110912/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0099685/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0102926/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0114369/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0120689/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0317248/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0407887/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchDramaMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0068646/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0468569/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0071562/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0108052/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0167260/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110912/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0137523/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0120737/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0109830/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchFamilyMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0245429/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110357/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt4633694/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0910970/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt2380307/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0986264/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0114709/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1049413/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0435761/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0266543/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchHistoryMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0108052/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt8503618/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt6316138/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0112573/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0363163/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0057115/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt8291224/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt2119532/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt2024544/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0395169/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchHorrorMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0054215/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0078748/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0081505/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt8239946/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0084787/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0056687/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt3461252/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0070047/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0063522/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0365748/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function fetchMusicalMovies() {
  //   const urls = [
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0110357/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt8503618/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0066763/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt1562872/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0367110/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0059742/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0169102/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0103639/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0101414/',
  //     'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0067093/'
      
  //   ];
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',
  //       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const requests = urls.map(url => fetch(url, options));
  //     const responses = await Promise.all(requests);
  //     const results = await Promise.all(responses.map(response => response.json()));
  //     console.log(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }