import './App.css'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import {useState, useEffect} from 'react'

function App() {
    const [animeList, SetanimeList] = useState([]);
    const [topanime, Settopanime] = useState([]);
    const [search,Setsearch] = useState("");
  return (
    <div className="App">
      <Navbar/>
      <Sidebar>
      </Sidebar>
    </div>
  )
}

export default App
