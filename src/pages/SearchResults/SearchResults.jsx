import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../Hooks/useGifs'

//SE ENCARGA DE MANDAR LO BUSCADO A LISTOFGIFS PARA RENDERIZARLO

const SearchResults = ({ params }) => {
    const { keyword } = params

    //CUSTOM HOOK DONDE SE ENCUENTRA EL USEFFECT
    const { loading, gifs } = useGifs( { keyword }) 

    return <>
        {loading ? <p>Cargando...</p> : <ListOfGifs gifs={gifs} />}
    </>
}

export default SearchResults