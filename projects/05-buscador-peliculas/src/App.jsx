import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
// import { useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export function App() {
  const [sort, setSort] = useState(false)
  const { search, error, updateSearch } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })
  // const inputRef = useRef()

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 500),
    []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
    // const { query } = Object.fromEntries(new FormData(e.target))
    // console.log({ query })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    // if(newQuery.startsWith(' ')) return
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  // useEffect(() => {
  //   console.log('getMovies')
  // },[getMovies])

  return (
    <div className="App">
      <header className='header'>
        <h1>Buscador de Películas - TMDB</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input className={`input ${error ? 'input-error' : ''}`} value={search} onChange={handleChange} name='query' type="text" placeholder="Matrix, Avengers, Predator..."/>
          <input type="checkbox" checked={sort} onChange={handleSort} className='checkbox' />
          {/* <input type="text" placeholder="Matrix, Avengers, Predator..." ref={inputRef}/> */}
          <button>Buscar</button>
        </form>
        {
          error && <p className="error">{error}</p>
        }
      </header>
      <main>
        {
          loading
            ? <p>Cargando...</p>
            :  <Movies movies={movies} />
        }
      </main>
    </div>
  )
}