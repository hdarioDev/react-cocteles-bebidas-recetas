import React, { useContext } from 'react'
import Form from '../Form'
import ListResets from '../ListResets'
import '../../../styles/components/Container.css'
import ModalProvider, { ModalContext } from '../../context/modalContext'
import Modal from './Modal'


function Container() {
    const { idrecipe, setIdRecipe, recipe, setRecipe } = useContext(ModalContext)
    const handleCloseModal = () => {
        setIdRecipe(null)
        setRecipe({})
    }
    const getIngredients = item => {
        let ingredients = []
        for (let i = 1; i < 16; i++) {
            if (item[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{item[`strIngredient${i}`]} : {item[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }
    return (
        <>
            <section>
                <label className="label-form" htmlFor="test">Busca bebidas por categoría e ingrediente</label>
                <Form />
            </section>
            {
                idrecipe ?
                    <Modal >
                        <div className="container-modal">
                            <h2>{recipe.strDrink} ({recipe.strCategory})</h2>
                            <article>
                                {/* {
                                    recipe.strDrinkThumb ? <img src={recipe.strDrinkThumb} alt={`Foto ${recipe.strDrink}`} /> : <h3>Cargando...</h3>
                                } */}
                                {
                                    recipe.strInstructions ?
                                        <div className="container-detail-modal">
                                            <h3>Instructions</h3>
                                            <p> {recipe.strInstructions} </p>
                                            <h3>Ingredients</h3>
                                            <ul>
                                                {getIngredients(recipe)}
                                            </ul>
                                        </div>
                                        : <h3>Cargando...</h3>
                                }
                            </article>
                            <div className="footer-modal">
                                <button onClick={() => { handleCloseModal() }} > cerrar</button>
                            </div>

                        </div>
                    </Modal >
                    : null
            }
            <ListResets></ListResets>
        </>
    )
}

export default Container