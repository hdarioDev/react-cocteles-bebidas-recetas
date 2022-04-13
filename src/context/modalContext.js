import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../environments/env'

export const ModalContext = createContext()

const ModalProvider = (props) => {
    const [idrecipe, setIdRecipe] = useState(null)
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const getInfo = async () => {
            if (!idrecipe) return
            const url = `${API}lookup.php?i=${idrecipe}`
            const response = await axios.get(url)
            console.log("response detail ", response.data.drinks[0])
            setRecipe(response.data.drinks[0])
        }
        getInfo()
    }, [idrecipe])


    return (
        <ModalContext.Provider
            value={{
                setIdRecipe,
                idrecipe,
                recipe,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider