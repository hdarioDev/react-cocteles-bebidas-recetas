import React from 'react'
import { INGREDIENTS } from '../environments/utils'


const SelectIngredientes = () => {
    return (
        <select className="input-base" name="ingredient" id="">
            <option value="">--Selecciona ingrediente</option>
            {
                INGREDIENTS.map(category => (
                    <option
                        key={category.strIngredient1}
                        value={category.strIngredient1}
                    >{category.strIngredient1}</option>
                ))
            }
        </select>
    )
}

export default SelectIngredientes