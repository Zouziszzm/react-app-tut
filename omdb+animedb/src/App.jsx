import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='head'>
        <a className='m-items'>Anime</a>
        <a className='m-items'>Movies</a>
      </div>
    </div>
  )
}

export default App
