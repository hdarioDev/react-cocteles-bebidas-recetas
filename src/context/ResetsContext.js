import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../environments/env'

export const ResetsContext = createContext()
const ResetasProvider = (props) => {

    const [resets, setResets] = useState([])
    const [search, setSearch] = useState({
        name: '',
        category: ''
    })
    const [get, setGet] = useState(false)
    useEffect(() => {
        console.log("useEffect ", search);
        if (get) {
            const getResets = async () => {
                const url = `${API}filter.php?i=${search.name}&c=${search.category}`
                const res = await axios(url)
                setResets(res.data.drinks)
            }
            getResets()
        }
    }, [search])

    return (
        <ResetsContext.Provider
            value={{
                resets,
                setSearch,
                setGet
            }}
        >
            {props.children}
        </ResetsContext.Provider>
    )
}

export default ResetasProvider