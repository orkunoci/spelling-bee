import { createSlice } from "@reduxjs/toolkit";
type initialStateType = {
    wordList: string[]
    word:string
    pangram:{}
    foundedWords: string[]
}
const initialState = {
    wordList: [],
    word:"",
    pangram:{},
    foundedWords:[]
} as initialStateType

export const wordList = createSlice({
    name: 'wordList',
    initialState,
    reducers:{
        addLetter: (state, action) => {
            state.wordList.push(action.payload)
        },
        removeLetter: (state) => {
            state.wordList.pop()
        },
        deleteAllLetters: (state) => {
            state.word="",
            state.wordList = []
        },
        setPangram: (state, action) => {
            state.pangram = action.payload
        },
        AddFoundedWord: (state, action) => {
            state.foundedWords.push(action.payload)
        },
        resetWordList: (state) => {
            state.wordList = [];
            state.word = "";
            state.pangram = {};
            state.foundedWords = [];
        }
        
   
    }
});

export const {addLetter,removeLetter,deleteAllLetters,setPangram,AddFoundedWord,resetWordList} = wordList.actions; 
export default wordList.reducer;