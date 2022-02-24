import { useState, useEffect, useContext} from 'react'
import GifsContext from '../context/GifsContext';
import getGifs from '../services/getGifs';

//CUSTOM HOOK QUE DEVUELVE LO QUE TRAE EL USEFFECT CON LA BUSQUEDA QUE TU PASES POR EL INPUT

const useGifs = ({ keyword } = { keyword: null}) => {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext);

    useEffect(() => {
        setLoading(true)
        //recuperamos la key del local
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // guardamos la key en el local
            if (keyword) localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])
    return {loading, gifs}
}

export default useGifs