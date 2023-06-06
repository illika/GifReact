import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'Lucky Star']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
        // CALLBACK
        // setCategories(cat => [...cat, 'Fairy Tail']);
    };

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={value => onAddCategory(value)}
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
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
