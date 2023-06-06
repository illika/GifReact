import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) return;

        // Uso de los Callback del SET del useState
        // setCategories(category => {})
        setCategories((category) => [...category, inputValue.trim()]);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
