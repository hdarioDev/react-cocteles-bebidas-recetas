import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../environments/env'

export const CategoriesContext = createContext()

const CategoriesProvider = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const url = `${API}list.php?c=list`
            const categories = await axios(url)
            setCategories(categories.data.drinks)
        }
        getCategories()

    }, [])


    return (
        <CategoriesContext.Provider
            value={
                { categories }
            }
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider

