import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        console.log("Desde el submit - test");
        event.preventDefault();        
        if (inputValue.trim().length <= 1) return;

        // Uso de los Callback del SET del useState
        // setCategories((category) => [...category, inputValue.trim()]);
        onNewCategory(inputValue.trim().toLowerCase());
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}