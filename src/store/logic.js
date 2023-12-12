import { createSlice } from "@reduxjs/toolkit";


const initialLogicState = {
    playerOne:[],
    playerTwo:[],
    result:[['00','01','02'],
            ['10','11','12'],
            ['20','21','22'],
            ['00','10','20'],
            ['01','11','21'],
            ['02','12','22'],
            ['00','11','22'],
            ['02','11','02']],
    winner:null
}

const logicSlice = createSlice({
    name:'logic',
    initialState:initialLogicState,
    reducers:{
        insertIntoOne(state,action){
            state.playerOne.push(action.payload)
        },
        insertIntoTwo(state,action){
            state.playerTwo.push(action.payload)
        },
        insertWinner(state,action){
            state.winner = action.payload
        }
    }

})



export const logicActions  = logicSlice.actions
export default logicSlice.reducer;