export async function searchMovies({ search }) {

  if (search === '') return

  try {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&query=${search}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results

      return movies?.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        overview: movie.overview
      }))
    })
  } catch (error) {
    throw new Error('Error al buscar las películas')
  }
}