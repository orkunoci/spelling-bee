"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { addLetter, removeLetter } from '../store/slices/word-slice';

const PuzzleInput = () => {
    const value = useSelector((state: RootState) => state.wordListReducer.wordList);
    const dispatch = useDispatch<AppDispatch>();
    const [inputValue, setInputValue] = useState<string>(value.join(""));
    
    useEffect(() => {
        if (value) {
          setInputValue(value.join(""));
        }
      }, [value]);
      
  return (
    <input 
    pattern="[A-Za-z]+" 
    id='puzzle-input'
    value={inputValue} 
    onKeyDown={(e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      dispatch(removeLetter());
    }
  }}
  onChange={(e) => {
    const userInput = e.currentTarget.value.slice(-1).replace(/[^A-Za-z]/g, '');
    dispatch(addLetter(userInput));
  }} 
  type="text" 
  placeholder='Type here '
  className="puzzle-block border-b-2 text-2xl uppercase border-black py-2 focus:outline-none focus:border-yellow-500 leading-2 transition-colors ease-in placeholder:text-3xl placeholder:text-gray-300" 
/>
  )
}

export default PuzzleInput