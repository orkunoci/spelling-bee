import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    isGameStarted: boolean,
    isGamePaused: boolean,
    isGameOver: boolean,
    score: number,
    seconds: number,
    minutes: number,
    resetFlag: boolean

}

const initialState = {
    isGameStarted: false,
    isGamePaused: false,
    isGameOver: false,
    score: 0,
    seconds: 5,
    minutes: 0,
    resetFlag:false
} as initialStateType;


const gameStateSlice = createSlice({
    name: "gameState",
    initialState,
    reducers:{
        endGame: (state) => {
            state.isGameOver = true;
            state.isGameStarted = false;
            state.isGamePaused = false;
            state.resetFlag = true;
        },
        startGame: (state) => {
            state.seconds= 59,
            state.minutes= 0,
            state.isGameStarted = true;
            state.isGamePaused = false;
            state.isGameOver = false;
            state.score = 0;
            state.resetFlag = true;
        },
        awardCountDown: (state,action) => {
            state.seconds += action.payload;
        },
        setCountDown: (state) => {
            state.seconds == 0 ? state.seconds = 0 : state.seconds -= 1;
        },
        resetGame: (state,action) => {
            state.resetFlag = action.payload;
        }
        
    }
});
export const {endGame,startGame,setCountDown,awardCountDown} = gameStateSlice.actions;
export default gameStateSlice.reducer;