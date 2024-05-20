"use client"
import React, { useEffect } from 'react'
import PuzzleBlock from './PuzzleBlock'
import ResultBlock from './ResultBlock'
import useFetchDictionary from '@/hooks/useFetchDictionary'
import { useDispatch, useSelector } from 'react-redux'
import { setPangram } from '../store/slices/word-slice'
import { RootState } from '../store/store'

const GameBlock = () => {
  const resetFlag = useSelector((state: RootState) => state.gameSateReducer.resetFlag);
    const { dictionary} = useFetchDictionary(resetFlag);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setPangram(dictionary))
    },[dispatch,dictionary])
    return (
    <>
    <ResultBlock />
    <PuzzleBlock />
    </>
  )
}

export default GameBlock