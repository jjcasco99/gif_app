import React from 'react'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

// MAPEO DE LOS GIF QUE ENTRAN POR PROP DE APP.js
const ListOfGifs = ({ gifs }) => {
    return <div className='list-of-gifs'>
    {
    gifs.map(({ id, title, url }) => <Gif title={title} url={url} key={id} id={id}/>)
    }
    </div>
}

export default ListOfGifs