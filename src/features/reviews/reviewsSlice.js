import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [],
    },
    reducers: {
        reviewAdded(state, action){
            console.log(action)
            state.entities.push({
                id: uuid(),
                comment: action.payload.comment,
                restaurantId: action.payload.restaurantId, 
            });
        },
        reviewRemoved(state, action){
           
            const index = state.entities.findIndex((review) => review.id === action.payload);
            state.entities.splice(index, 1);
        },
    },
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;

export default reviewsSlice.reducer;