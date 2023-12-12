import {createSlice} from '@reduxjs/toolkit'

const initialMat = {mat:[[0,0,0],[0,0,0],[0,0,0]],flag:false};

const matSlice = createSlice({
    name:'matrix',
    initialState:initialMat,
    reducers:{
        changeByPlayerOne(state,action){
            state.mat[action.payload[0]][action.payload[1]] = 1
        },
        changeByPlayerTwo(state,action){
            state.mat[action.payload[0]][action.payload[1]] = 2
        },
        changeFlag(state){
            state.flag = !state.flag
        }
    }
})

export const matActions = matSlice.actions;
export default matSlice.reducer;