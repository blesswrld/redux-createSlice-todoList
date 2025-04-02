// import { createStore } from "redux";
import { nanoid, createSlice, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const todoSlice = createSlice({
    name: "@@todos",
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false,
                },
            }),
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find((todo) => todo.id === id);
            todo.completed = !todo.completed;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const store = configureStore({
    reducer: todoSlice.reducer,
    // reducer: {
    //     todos: todoSlice.reducer,
    // },
    // включаем расширение для redux devtools
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // preloadedState: [{ id: 1, title: "Redux", completed: true }],
    // enhancers: [],
});
