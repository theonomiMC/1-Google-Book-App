import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// initial State
const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) :[],
}

// create context
export const BooksContext = createContext(initialState)

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    //--store data to localstorage--
    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])

    //---Actions---
    const addBookToFavorites = book => {
        dispatch({ type: "ADD_BOOK_TO_FAVORITES", payload: book })
    }

    const removeBookFromFavorites = id =>{
        dispatch({ type: "REMOVE_BOOK_FROM_FAVORITES", payload: id})
    }
    
    return(
        <BooksContext.Provider
            value={{
                favorites: state.favorites,
                addBookToFavorites,
                removeBookFromFavorites,
            }}
        >
            {props.children}
        </BooksContext.Provider>
    )
}