export const fetchMovies = async() => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY1MjhlZmM3MzE1N2U5N2VhNjNmMTVkNTQ0NDcwZSIsIm5iZiI6MTcxOTkxODA0MS44MDY3NzcsInN1YiI6IjY2ODNkNzM1NWQ5YjA5OWRjOGVmODE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvofdBhPSypyrzwj-x280fRl_I47KWvweeBHX6GLqwo",
    },
  };
  try {
    const response = await fetch(url, options);
const jsonData = await response.json();
return jsonData.results;
    
  } catch (error) {
    console.error('error: ' + error)
  }

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));
};


export const fetchMovie = async (id:number) =>{
const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY1MjhlZmM3MzE1N2U5N2VhNjNmMTVkNTQ0NDcwZSIsIm5iZiI6MTcxOTkxODA0MS44MDY3NzcsInN1YiI6IjY2ODNkNzM1NWQ5YjA5OWRjOGVmODE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvofdBhPSypyrzwj-x280fRl_I47KWvweeBHX6GLqwo'
  }
};
try {
    const res = await fetch(url, options);
    const jsonData = await res.json();
    return jsonData;
} catch (error) {
    
}
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
}
