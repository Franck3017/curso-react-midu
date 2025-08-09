import { Header } from './components/Header'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <Header handleClick={handleClick} />
      {
        fact && (
          <p>
            {fact}
          </p>
        )
      }
      {
        imageUrl && (
          <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
        )
      }
    </main>
  )
}
