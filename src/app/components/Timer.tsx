import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { endGame, setCountDown } from '../store/slices/game-state-slice';
import { useTranslations } from 'next-intl';
import { resetWordList } from '../store/slices/word-slice';

const Timer = () => {
  const dispatch = useDispatch();
  const isGameOver = useSelector((state: RootState) => state.gameSateReducer.isGameOver);
  const stateSeconds = useSelector((state: RootState) => state.gameSateReducer.seconds);
  const [minutes, setMinutes] = React.useState<number>(0);
  const t = useTranslations("Components.Timer")
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCountDown());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch,stateSeconds]);

  useEffect(() => {
    if (stateSeconds === 0) {
      dispatch(endGame());
      dispatch(resetWordList())
    }
  }, [stateSeconds, dispatch]);


  return (
    <div>
      {isGameOver ? <h1>{t("gamsestate")}</h1> : <h1>{minutes}:{stateSeconds}</h1>}
    </div>
  );
};

export default Timer;
