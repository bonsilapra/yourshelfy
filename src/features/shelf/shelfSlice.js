import { createSlice } from '@reduxjs/toolkit'
import { logoutUser } from '../user/userSlice';

export const shelfSlice = createSlice({
    name: 'shelf',
    initialState: [],
    reducers: {
        getShelves: (state, action) => {
            return action.payload;
        },
        // deleteShelf: (state, action) => {
        //     state.shelf = state.shelf.filter((shelf) => shelf.id !== action.payload.id);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state, action) => {
            state.shelf = []
        });
    },
})

export const { getShelves, deleteShelf } = shelfSlice.actions

export const shelfReducer = shelfSlice.reducer