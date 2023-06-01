import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'Lucky Star']);

    const onAddCategory = () => {
        setCategories(['Fairy Tail', ...categories]);
        // CALLBACK
        // setCategories(cat => [...cat, 'Fairy Tail']);
    };

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            <button onClick={onAddCategory}>Agregar</button>
            {/* Listado de Gif */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}
