import axios from "axios";

const apiKey = '37kU0GkzwxOT0aBZeYW43rD5WfIJTuaL'

// SERVICIO PARA EL USEEFFECT PARA SOLO UTILIZAR UNA LINEA DE CODIGO

const getGifs = async ( {keyword = 'morty'} = {} ) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    const resp = await axios.get(apiURL);
    const gifs = resp.data.data.map(image => {
        const { title, images, id} = image
        const { url } = images.downsized_medium
        return { title, url, id};
    })
    return gifs.slice(0,10)
    // return fetch(apiURL)
    //         .then(res => res.json())
    //         .then(response => {
    //             const {data = []} = response
    //             if (Array.isArray(data)) {
    //                 const gifs = data.map(image => image.images.downsized_medium.url)
    //                 return gifs
    //             }
    //         })
}

export default getGifs