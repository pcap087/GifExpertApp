import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

//Este es un customHook que devuelve una funcion
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () =>  {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
    
}
