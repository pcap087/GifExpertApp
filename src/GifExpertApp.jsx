import { useState } from 'react';

import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch'])

    const onCategory = ( newCategory ) => {
        if (categories.includes(newCategory)){
            return;
        } else {
            setCategories([newCategory, ...categories]);
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onCategory = { (value) => onCategory(value) } 
            />
           
            { 
                categories.map( (category) => (
                    <GifGrid  
                        key={category}
                        category={category}
                    /> 
                ))
            }
         
        </>
    )
}

// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

//otro forma de hacer
// const onCategory = ( newCategory ) => {
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory, ...categories]);
// }
