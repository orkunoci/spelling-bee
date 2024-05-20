"use client";
import React from 'react'
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addLetter } from '../store/slices/word-slice';

interface TileProps {
  letter: string
  isEssential?: boolean
  cName?:string
}



const Tile = ({letter,isEssential,cName}:TileProps) => {
  
  const wordList = useSelector((state:RootState) => state.wordListReducer.wordList)
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    dispatch(addLetter(e.currentTarget.innerText))
  }

  return (
    <div className={`flex w-[100px] m-1 ${cName}`}>
        <div onClick={handleClick} className={`${isEssential ? "bg-yellow-300" :" bg-gray-400"} w-[100px] m-1 h-calc [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0%)]  inline-flex items-center justify-center cursor-pointer` }>
          <span className='text-black block w-full text-2xl text-center'>{letter}</span>
        </div>
    </div>
  )
}

export default Tile