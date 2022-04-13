import React, { useContext } from 'react'
import '../../styles/components/Recipe.css'
import { ModalContext } from '../context/modalContext'

const Recipe = ({ recipe }) => {
    const { setIdRecipe } = useContext(ModalContext)

    return (
        <article>
            <h2>{recipe.strDrink}</h2>
            <div className="img-container">
                <img src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`} />
            </div>
            <button className="button-recipe" onClick={() => {
                setIdRecipe(recipe.idDrink)
            }}>Ver Receta</button>
        </article>
    )
}

export default Recipe