import { createSlice } from '@reduxjs/toolkit';

const initialMatchesState = {
    potentialMatches: [],
    likes: [],
    dislikes: [],
    superLikes: [],
    currMatch: [],
};

const matchesSlice = createSlice({
    name: 'matches',
    initialState: initialMatchesState,
    reducers: {
        populate(state, action) {
            state.potentialMatches = action.payload;
        },
        addLikedUsers(state, action) {
            state.likedUsers = action.payload;
        },
        addDislikedUsers(state, action) {
            state.dislikedUsers = action.payload;
        },
        addSuperLikedUsers(state, action) {
            state.superLikedUsers = action.payload;
        },
    },
});

export const matchesActions = matchesSlice.actions;
export default matchesSlice.reducer;
