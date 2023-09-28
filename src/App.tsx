

import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [peliculas, setPeliculas] = useState <any[]>([])
   

  const obtenerPeliculas = async() => {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
    const res = await fetch(url)
    const data = await res.json()
    setPeliculas(data.results)
    

  }

  useEffect(() =>{
    obtenerPeliculas()
  }, [])




   return (
    
      <div>
          {
            peliculas.map(pelicula => (
              <div key={pelicula.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.name}/>
              <p > {pelicula.name}</p>

              </div>
             
            ) )
 
          }
      </div>
     
   
  )

 
}

export default App
