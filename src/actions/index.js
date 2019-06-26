import {ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes'

let nextId = 0

export const addTodo = (test) => ({
    type: ADD_TODO, 
    id: nextId++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})