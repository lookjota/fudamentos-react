import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Diego Fernandes"
        content="Loren ipsum dolor sit anet"
      />
      <Post 
        author="Gabriel Buzzi"
        content="Un novo post muito legal"
      />

    </div>
  )
}


