import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Two Punch'])

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                setCategories = {setCategories}
            />

            <ol>
                { categories.map( category => {
                    return <li key={ category }> { category } </li>
                })}
               
            </ol>
        </>
    )
}
