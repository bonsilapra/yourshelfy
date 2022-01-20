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
        },
        addCategoryAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                if (value.id != action.payload.shelfId) {
                    return value
                } else {
                    value.categories = [...value.categories, action.payload.newCat]
                    return value
                } 
            });
        },
        editCategoryAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories.map((cat) => {
                    if (cat.id != action.payload.catId) {
                        return cat
                    } else {
                        cat.name = action.payload.newCatName
                        return cat
                    }
                })
                return value
            });
        },
        deleteCategoryAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories = value.categories.filter((shelf) => shelf.id !== action.payload)
                return value
            });
        },
        addProductAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories.map((cat) => {
                    if (cat.id != action.payload.catId) {
                        return cat
                    } else {
                        cat.products = [...cat.products, action.payload.newProd]
                        return cat
                    }
                });
            return value
            })
        },
        deleteProductAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories.map((cat) => {
                    if (cat.id != action.payload.catID) {
                        return cat
                    } else {
                        cat.products = cat.products.filter((prod) => prod.product.id !==action.payload.prodID)
                        return cat
                    }
                })
                return value
            });
        },
        editProductAction: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories.map((cat) => {
                    if (cat.id != action.payload.catID) {
                        return cat
                    } else {
                        cat.products = cat.products.map((prod) => {
                            if (prod.product.id != action.payload.oldProductId) {
                            return prod
                        } else {
                            prod.product = action.payload.newProduct
                            return prod
                            }
                        })
                    }
                })
                return value
            });
        },
        deltaProduct: (state, action) => {
            state.shelves = state.shelves.map((value) => {
                value.categories.map((cat) => {
                    if (cat.id != action.payload.catID) {
                        return cat
                    } else {
                        cat.products = cat.products.map((prod) => {
                            if (prod.product.id != action.payload.prodID) {
                            return prod
                        } else {
                            prod.amount = action.payload.amount
                            return prod
                            }
                        })
                    }
                })
                return value
            });
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser, (state, action) => {
            state.shelves = []
        });
    },
})

export const { 
    getShelves, 
    addShelf, 
    deleteShelf, 
    editShelf, 
    addCategoryAction, 
    editCategoryAction, 
    deleteCategoryAction,
    addProductAction,
    deleteProductAction,
    editProductAction,
    deltaProduct
} = shelfSlice.actions

export const shelfReducer = shelfSlice.reducer