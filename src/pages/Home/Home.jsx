import React, { useState } from 'react'
import { useLocation} from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import useGifs from '../../Hooks/useGifs';


const Home = () => {
  const [keyword, setKeyword] = useState("")
  //Este hook se encarga de mandarte a donde pushLocation diga VER MAS ABAJO
  const [path, pushLocation] = useLocation(); 
  const {loading , gifs} = useGifs()
     
  const handleSubmit = evt => {
      evt.preventDefault();
    //navegar a otra ruta;
    pushLocation(`/search/${keyword}`);
  }  

  const handleChange = evt =>{
    setKeyword(evt.target.value)
  } 

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword}/>
    </form>
    <h3>Última búsqueda</h3>
    <div className='last-search'>
    {loading ? <div>Cargando...</div> : <ListOfGifs gifs={gifs} />}
    </div>
    </>
  )
}

export default Home   