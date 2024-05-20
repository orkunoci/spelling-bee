"use client";
import React, { useEffect, useState } from 'react';
import Tiles from './Tiles';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { AddFoundedWord, deleteAllLetters, removeLetter } from '../store/slices/word-slice';
import PuzzleInput from './PuzzleInput';
import { awardCountDown } from '../store/slices/game-state-slice';
import { setScore } from '../store/slices/game-rank-slice';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

const PuzzleBlock = () => {
  const value = useSelector((state: RootState) => state.wordListReducer.wordList);
  const founedWords = useSelector((state: RootState) => state.wordListReducer.foundedWords);
  const rank = useSelector((state: RootState) => state.gameRankSlice.rank);
  const t = useTranslations("Components.Buttons")
  const toastTranslations = useTranslations("Toasts.errors")
  const [dictionary, setDictionary] = useState<any>({
    mustUsed: '',
    restOfLetters: [],
    words: [],
  });
  const dispatch = useDispatch<AppDispatch>();
  const choosenPangram = useSelector((state:RootState)=> state.wordListReducer.pangram)
  
  console.log(choosenPangram)
  const handleSubmit = () => {
    const answer = value.join('');
    if (!answer.includes(dictionary.mustUsed)) {
      toast.error(toastTranslations("HaveEssentialWord"));
      dispatch(deleteAllLetters())
      return;
    }  
    if(dictionary.words.indexOf(answer) < 0){
      toast.error(toastTranslations("Notvalidword"));
      dispatch(deleteAllLetters())
      return;
    }
    if(founedWords.indexOf(answer) > -1){
      toast.error(toastTranslations("Foundedword"));
      dispatch(deleteAllLetters())
      return;
    }
    dispatch(AddFoundedWord(answer))
    dispatch(awardCountDown(15))
    dispatch(setScore(answer.length + calculateScore(answer)))
    dispatch(deleteAllLetters())
    
  }
  const calculateScore = (word: string):number => {
    const wordLength = word.length;
    if (wordLength > 5) {
      return 10;
    }
    if (wordLength > 6) {
      return 12;
    }
    if (wordLength > 7) {
      return 14;
    }
    if (wordLength > 9 ) {
      return 18;
    }
    if (wordLength > 10) {
      return 20;
    }
    return 0;
  
  }
  useEffect(() => {
    setDictionary(choosenPangram)
  },[choosenPangram])

  return (
    <div className='flex items-center justify-center flex-col flex-1'>

      <PuzzleInput/>
      {dictionary && Object.keys(dictionary).length > 0 ? (
        <Tiles dictionary={dictionary} />
      ) : (
        <p>Loading dictionary...</p>
      )}
      <div className="">
        <button className="py-2 px-4 mr-4 bg-yellow-500 text-black rounded-full" onClick={handleSubmit} >{t("submit")}</button>
        <button onClick={() => dispatch(removeLetter())} className="py-2 px-4 rounded-full bg-red-500 text-black">{t("delete")}</button>
      </div>
    </div>
  );
};

export default PuzzleBlock;
