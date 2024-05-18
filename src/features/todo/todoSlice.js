import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    todoUpdateInput: {
        id: "",
        todo: "",
        isUpdated: false
    }
}

export const todoSlice = createSlice( {
    name: "todo",
    initialState,
    reducers: {
        addTodo: ( state, action ) => {
            state.todos.push( {
                id: nanoid(),
                todo: action.payload,
                completed: false,
            } )
        },
        deleteTodo: ( state, action ) => {
            state.todos = state.todos.filter( todo => todo.id !== action.payload );
        },
        toggleComplete: ( state, { payload } ) => {
            state.todos.map( todo => todo.id === payload ? todo.completed = !todo.completed : todo )
        },
        updateTodoStatus: ( state, action ) => {
            state.todoUpdateInput.isUpdated = true;
            state.todoUpdateInput.id = action.payload.id;
            state.todoUpdateInput.todo = action.payload.todo;
        },
        updateTodo: ( state, action ) => {
            state.todos.map( todo => todo.id === action.payload.id ? todo.todo = action.payload.todo : todo );
            state.todoUpdateInput = { id: "", todo: "", isUpdated: false }
        }
    }
} )
export const { addTodo, deleteTodo, toggleComplete, updateTodoStatus, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer