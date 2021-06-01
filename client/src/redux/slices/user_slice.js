import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
    user: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        populate(state, action) {
            console.log(state.user);
            state.user = action.payload;
        },
        // addToLikes(state, action) {
        //     state.user.likes.push(action.payload);
        // },
        // addToDislikes(state, action) {
        //     state.user.dislikes.push(action.payload);
        // },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
