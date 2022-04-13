import React, { useContext } from 'react'
import Header from '../components/Layout/Header'
import '../../styles/_vars.css'
import '../../styles/components/Apps.css'
import Container from './Layout/Container'
import CategoriesProvider from '../context/CategoriesContext'
import ResetasProvider from '../context/ResetsContext'
import ModalProvider from '../context/modalContext'

function App() {

    return (
        <CategoriesProvider>
            <ResetasProvider>
                <ModalProvider>
                    <Header></Header>
                    <Container />
                </ModalProvider>
            </ResetasProvider>
        </CategoriesProvider>
    )
}

export default App