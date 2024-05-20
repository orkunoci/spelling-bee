"use client";
import React from 'react'
import ScoreBlock from './ScoreBlock'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useTranslations } from 'next-intl';

const FoundedWordsList = () => {
    const foundedWords = useSelector((state:RootState) => state.wordListReducer.foundedWords);
    const t= useTranslations("Components.FoundedWordList")
  return (
    <div className='border-2 border-black  flex-1 p-4 min-h-96 md:w-[500px] w-[300px] rounded-2xl flex flex-col'>
    <h2 className='text-lg mb-4'>{t("foundedWords")} : {foundedWords.length}</h2>
    <ul className='flex-1 overflow-y-auto max-h-[450px]'>
        { foundedWords.length === 0 ? null : 
        foundedWords.map((word, index) => <li key={index} className=''><span className='text-sm font-normal mb-4 border-b-[1px] border-b-gray-400'>{word}</span></li>)}
    </ul>
    <ScoreBlock/>
  </div>
  )
}

export default FoundedWordsList