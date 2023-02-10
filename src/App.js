import React from 'react'
import {useEffect} from 'react'
//add a api to call movi database and next page for anime database.
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
