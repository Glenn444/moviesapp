export const addMovieToWatchList = async(movieId: number) => {

  const url = "https://api.themoviedb.org/3/account/21361026/watchlist";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY1MjhlZmM3MzE1N2U5N2VhNjNmMTVkNTQ0NDcwZSIsIm5iZiI6MTcxOTkxODA0MS44MDY3NzcsInN1YiI6IjY2ODNkNzM1NWQ5YjA5OWRjOGVmODE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvofdBhPSypyrzwj-x280fRl_I47KWvweeBHX6GLqwo",
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      watchlist: true,
    }),
  };
const res = await fetch(url, options);
const jsonData = await res.json();
return jsonData;

};

export const MoviesToWatch = async() => {

    const url = 'https://api.themoviedb.org/3/account/21361026/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzY1MjhlZmM3MzE1N2U5N2VhNjNmMTVkNTQ0NDcwZSIsIm5iZiI6MTcxOTkxODA0MS44MDY3NzcsInN1YiI6IjY2ODNkNzM1NWQ5YjA5OWRjOGVmODE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvofdBhPSypyrzwj-x280fRl_I47KWvweeBHX6GLqwo'
      }
    };
    const res = await fetch(url, options);
   const jsonData = await res.json();
   return jsonData.results;
  };
  
