"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Timer from './Timer'
import GameOverModal from './GameOverModal'

const ScoreBlock = () => {
    const score = useSelector((state:RootState)=> state.gameRankSlice.score)
    console.log(score)

  return (
    <div className="flex items-center justify-between">
      <h3>Score : {score}</h3>
      <Timer/>
      <GameOverModal/>
    </div>
  )
}

export default ScoreBlock