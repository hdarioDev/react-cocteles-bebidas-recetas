import React, { useContext } from 'react'
import { ResetsContext } from '../context/ResetsContext'
import Recipe from '../components/Recipe'
import '../../styles/components/ListResets.css'
const ListResets = () => {

    const { resets } = useContext(ResetsContext)
    console.log("resets ", resets);
    return (
        <div className="list--container">
            {
                resets ?
                    resets.map((item) => (
                        <Recipe

                            key={item.idDrink}
                            recipe={item}
                        />
                    ))
                    :
                    null
            }

        </div>
    )
}

export default ListResets