import {GET_BOOKS,REMOVE_BOOKS,SET_BOOKS,UPDATE_BOOKS} from "./action.type"

export const getBooks = (books) => ({
    type:GET_BOOKS,
    payload:books
})

export const setBooks = (books) => ({
    type:SET_BOOKS,
    payload:books
})

export const updateBooks = (books) => ({
    type:UPDATE_BOOKS,
    payload:books
})

export const removeBooks = (books) => ({
    type:REMOVE_BOOKS,
    payload:books
})