"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Stepper = () => {
  const playerRank = useSelector((state:RootState)=> state.gameRankSlice.rank )
  const ranks = ["beginner" , "good-start" , "moving-up" , "good" , "solid" , "nice" , "great" , "amazing" , "genius"]
  return (
    <div className='flex justify-between '>
      {ranks.map((rank, index) => (
        <div key={index} className={`step-item ${ranks[index] === playerRank && "active"}`}>
          <div className="step ">
          {ranks[index] === playerRank && <span className='text-black text-sm'>{index+1}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper