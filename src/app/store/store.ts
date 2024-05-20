import { configureStore } from '@reduxjs/toolkit'
import wordListReducer from './slices/word-slice'
import gameSateReducer from './slices/game-state-slice'
import gameRankSlice from './slices/game-rank-slice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      wordListReducer,
      gameSateReducer,
      gameRankSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']