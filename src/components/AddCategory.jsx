import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories( (categ) => [inputValue, ...categ]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
