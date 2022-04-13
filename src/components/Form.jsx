import React, { useContext, useState, useRef } from 'react'
import '../../styles/components/Form.css'
import SelectCategories from './SelectCategories'
import SelectIngredientes from './SelectIngredients'
import { ResetsContext } from '../context/ResetsContext'
const Form = () => {

    const reference = useRef(null);
    const { setSearch, setGet } = useContext(ResetsContext)

    const handleGet = (e) => {
        setGet(true)
        const formData = new FormData(reference.current);
        setSearch(Object.fromEntries(formData))
        e.preventDefault()

    }
    return (
        <form ref={reference}  >
            <SelectIngredientes />
            <SelectCategories />
            <button className="input-base" onClick={handleGet}>Buscar Bebidas</button>
        </form>
    )
}

export default Form