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
        },
        editShelf: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                if (value.id != action.payload.id) {
                    return value
                } else {
                    value.name = action.payload.name
                    return value
                } 
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state, action) => {
            state.shelves = []
        });
    },
})

export const { getShelves, addShelf, deleteShelf, editShelf } = shelfSlice.actions

export const shelfReducer = shelfSlice.reducer