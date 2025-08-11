import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
// import withResults from '../mocks/with-results.json'
// import withOutResults from '../mocks/with-no-results.json'

// esto funciona ✅
// pero esta mal ❌
// porque se esta utilizando el customHook, solo una vez
// los modulos en javascript son instancias unicas - singleton
// por lo tanto el previousSearch se va compartir
// donde sea que se importe el customHook
// y para evitar esto, se puede utilizar useRef

// let previousSearch = ''

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(({ search }) => {
      if (previousSearch.current === search) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        searchMovies({ search })
          .then(newMovies => setMovies(newMovies))
      } catch (error) {
        setError(error.message)
      } finally {
        // Entra en try como en el catch
        setLoading(false)
      }
    }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies

  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error }
}