import { createSlice } from "@reduxjs/toolkit";

type RankType = "beginner" | "good-start" | "moving-up" | "good" | "solid" | "nice" | "great" | "amazing" | "genius";

type StateType = {
    rank: RankType,
    score: number
}

const initialState: StateType = {
    rank: "beginner",
    score: 0
};

const rankThresholds = {
    beginner: 10,
    "good-start": 20,
    "moving-up": 30,
    good: 40,
    solid: 50,
    nice: 60,
    great: 70,
    amazing: 80,
    genius: 90
};

const gameRankSlice = createSlice({
    name: "gameRank",
    initialState,
    reducers: {
        setRank(state, action) {
            state.rank = action.payload;
        },
        setScore(state, action) {
            state.score += action.payload;
            updateRank(state);
        }
    }
});

const updateRank = (state: StateType) => {
    for (const rank in rankThresholds) {
        if (state.score >= rankThresholds[rank as RankType]) {
            state.rank = rank as RankType;
        }
    }
};

export const { setRank, setScore } = gameRankSlice.actions;

export default gameRankSlice.reducer;
