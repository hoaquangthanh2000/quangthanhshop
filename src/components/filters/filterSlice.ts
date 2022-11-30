import {createSlice} from '@reduxjs/toolkit'


const initState = {
    categories:[] as string[]
}
export const filterSlice = createSlice({
    name:'filters',
    initialState: initState,
    reducers: {
        categoryFilter:(state,action) => {
            state.categories.push(action.payload)
        },
        removeCategory:(state,action) => {
            state.categories =  state.categories.filter(item => item !== action.payload)
        }
    }
})

export const {categoryFilter,removeCategory} = filterSlice.actions