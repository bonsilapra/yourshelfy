import { createSlice } from '@reduxjs/toolkit'
import { logoutUser } from '../user/userSlice';

const initialState = {
    shelves: []
}
export const shelfSlice = createSlice({
    name: 'shelf',
    initialState,
    reducers: {
        getShelves: (state, action) => {
            state.shelves = action.payload;
        },
        addShelf: (state, action) => {
            state.shelves = [...state.shelves, action.payload]
        },
        deleteShelf: (state, action) => {
            state.shelves = state.shelves.filter((shelf) => shelf.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state, action) => {
            state.shelves = []
        });
    },
})

export const { getShelves, addShelf, deleteShelf } = shelfSlice.actions

export const shelfReducer = shelfSlice.reducer