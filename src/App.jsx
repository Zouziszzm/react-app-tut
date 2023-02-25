import './App.css'
import Navbar from './components/navbar.jsx'
import Mainsec from './components/mainsec.jsx'
import {useState, useEffect} from 'react'

function App() {
    const [animeList, SetanimeList] = useState([]);
    const Animelist = async () => {
        const temp = await fetch (`https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=20`)
        const resdata = await temp.json();
        console.log(resdata.data)
    }

    useEffect(() => {
        Animelist()
    },[])
    console.log(Animelist)

  return (
    <div className="App">
      <Navbar/>
      <div className="holder">
        <Mainsec animeList={animeList} />
      </div>
    </div>
  )
}

export default App
