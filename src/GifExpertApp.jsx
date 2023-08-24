import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Two Punch'])

    const onCategory = ( newCategory ) => {
        if (categories.includes(newCategory)){
            return;
        } else {
            setCategories([newCategory, ...categories]);
        }
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onCategory = { (value) => onCategory(value) } 
                //setCategories = {setCategories} 
            />

            <ol>
                { categories.map( category => {
                    return <li key={ category }> { category } </li>
                })}
               
            </ol>
        </>
    )
}

 //otro forma de hacer
// const onCategory = ( newCategory ) => {
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory, ...categories]);
// }