import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export default function App() {
  // const [isFollowing, setIsFollowing] = useState(true)
  // console.log('[App] isFollowing', isFollowing)
  // <TwitterFollowCard userName={'midudev'} initialIsFollowing={true}></TwitterFollowCard>
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pedro Pablo Kukhar',
      isFollowing: false
    },
    {
      userName: 'Franck3017',
      name: 'Frances Sánchez',
      isFollowing: true
    }
  ]


  return (
    <aside className='tw-sidebar'>
      <div className='tw-sidebar-title'>
        <h3>A quien seguir</h3>
      </div>
      {/* <TwitterFollowCard userName={'midudev'}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName='pheralb'>
        <span>Pedro Pablo Kukhar</span>
      </TwitterFollowCard>
      <TwitterFollowCard userName='Franck3017'>
        Frances Sánchez
      </TwitterFollowCard> */}
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              isFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }

      {/* <button onClick={() => setIsFollowing(!isFollowing)}>Cambiar nombre</button> */}
    </aside>
  )
}