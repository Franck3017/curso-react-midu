import { useState } from 'react'

export function TwitterFollowCard({ children, name, userName }) {
  // initialIsFollowing es el valor inicial del estado isFollowing, es decir, si es true, el botón se mostrará como "Siguiendo" y si es false, se mostrará como "Seguir"

  // Cuando se inicializa un estado inicial, solo se ejecuta una vez, es decir, cuando se renderiza el componente por primera vez
  const [isFollowing, setIsFollowing] = useState(false)
  const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img alt={`Avar de ${name}`} src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar'/>
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-name'>{children}</strong>
          <span className='tw-followCard-username'>@{userName}</span>
        </div>
      </header>
      <aside className='tw-followCard-aside'>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-follow'>
            {buttonText}
          </span>
          <span className='tw-followCard-unfollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}