"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Link from "next/link";
import { startGame } from "../store/slices/game-state-slice";

function GameOverModal() {
    const dispatch = useDispatch();
    const gameStatus = useSelector((state:RootState) => state.gameSateReducer.isGameOver);
    const score = useSelector((state:RootState) => state.gameRankSlice.score);
    return (
        <>
        {gameStatus && 
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto p-8">
                    <div className="flex flex-col items-center">
                        <h3>GameOverModal content</h3>
                        <span>Score: {score}</span>
                        <br/>
                        <button type="button" className="bg-red-500 text-white p-2 " onClick={()=> dispatch(startGame())}>Close GameOverModal</button>

                    </div>

                </div>
            </dialog>
            }
        </>
    );
}

export default GameOverModal;