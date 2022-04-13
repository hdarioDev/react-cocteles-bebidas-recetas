import React, { useContext, useState, useRef } from 'react'
import '../../styles/components/Form.css'
import SelectCategories from './SelectCategories'
import SelectIngredientes from './SelectIngredients'
import { ResetsContext } from '../context/ResetsContext'
const Form = () => {

    const reference = useRef(null);
    const { setSearch, setGet } = useContext(ResetsContext)

    const handleGet = (e) => {
        e.preventDefault()
        const formData = new FormData(reference.current)
        setSearch(Object.fromEntries(formData))
        console.log(Object.fromEntries(formData))
        // console.log(Object.fromEntries(formData).ingredient)
        if (Object.fromEntries(formData).ingredient == "" || Object.fromEntries(formData).category == "") {
            return false
        }
        setGet(true)
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