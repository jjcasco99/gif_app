import React, {useContext} from 'react'
import Gif from '../../components/Gif/Gif';
import  GifsContext  from '../../context/GifsContext';
import useGifs from '../../Hooks/useGifs';

const Detail = ({params}) => {
  const {loading} = useGifs();
  const {gifs} = useContext(GifsContext)
  const gif = gifs.find(singleGif => singleGif.id === params.id);
  return loading ? <div>Cargando...</div> : <Gif {...gif}/>
}

export default Detail