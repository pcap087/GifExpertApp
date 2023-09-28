import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'; 


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { isLoading && ( <h2>Cargando...</h2>) }
        
            <div className="card-grid">
                { 
                    images.map( (image) => (
                        <GifItem
                            key={ image.id} 
                            { ...image }
                        />
                    )) 
                }
            </div>
        </>
    ) 
}


/* useEffect: se utiliza para disparar efectos secundarios
    en el useEffect siempre hay que pasar las dependencias que seria
    el arreglo [] y significa que solo se va a ejecutar la primera vez
    que se crea y se construye el componente
    * Se ejecuta en 3 lugares diferentes
        1) Cuando se monta el componente
        2) Se ejecuta cuando hay un cambio(render) del estado
        3) Cuando tiene alguna dependencia del cual tiene que ejecutarse

    obs: El useEffect no sirve la inicializar cosas
*/  

//const [counter, setCounter] = useState(10);
{/* <>
    <h3>{ category }</h3>
    <h2>{ counter }</h2>
    <button onClick={() => setCounter(counter + 1 )}>+1</button>
</> */}

// isLoading
// ? ( <h2>Cargando...</h2>)
// : null