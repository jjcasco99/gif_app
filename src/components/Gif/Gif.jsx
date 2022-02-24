import React from 'react'
import { Link } from 'wouter'
import './Gif.css'
 
// COMPONENTE GIF
const Gif = ( { title, url , id}) => {
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`}>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
            </Link>
        </div>
    )
}

export default Gif