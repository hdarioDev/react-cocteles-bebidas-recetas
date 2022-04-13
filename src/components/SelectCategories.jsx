import React, { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'

const SelectCategories = () => {
    const { categories } = useContext(CategoriesContext)
    return (
        <select className="input-base" name="category" id="">
            <option value="">--Selecciona categoría</option>
            {
                categories.map(category => (
                    <option
                        key={category.strCategory}
                        value={category.strCategory}
                    >{category.strCategory}</option>
                ))
            }
        </select>
    )
}

export default SelectCategories