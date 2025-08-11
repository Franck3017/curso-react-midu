function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResults() {
  return (
    <p>No se encontraron resultados.</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies 
    ? <ListOfMovies movies={movies} />
    : <NoResults />
  )
}