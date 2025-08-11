import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [ search, updateSearch ] = useState('')
  const [ error, setError ] = useState(null)
  const isFirstInput = useRef(true) // Se utiliza como bandera para saber si es la primera vez que se escribe en el input

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a search term')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Search term must not be only numbers')
      return
    }

    if (search.length < 3) {
      setError('Search term must be at least 3 characters long')
      return
    }

    setError(null)

  },[search])

  return { search, error, updateSearch}
}