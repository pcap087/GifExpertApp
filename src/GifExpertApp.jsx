import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Two Punch'])
    
    //function Add
    const AddCategorie = () => {

        setCategories([...categories, 'three Punch']);

    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                setCategories = {setCategories}
            />

            {/* Listado de Item */}
            <button onClick={AddCategorie}>Agregar</button>

            <ol>
                { categories.map( category => {
                    return <li key={ category }> { category } </li>
                })}
               
            </ol>
                {/* Gift Item */}
        </>
    )
}
