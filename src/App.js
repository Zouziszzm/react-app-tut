import React from 'react'
import {useEffect} from 'react'

const App = () => {
    
    const searchAnime = async (title) =>{
        const response = await fetch(`http://animedb.me/api/shows`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(()=>{
        searchAnime()
    },[])

    return(
        <h1>Bello</h1>

    );
}
export default App
