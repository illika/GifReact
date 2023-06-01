import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Dragon Ball')

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
