import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useDispatch, useSelector } from "react-redux"
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurantId }) {

  
  const reviewsList = useSelector((state) => state.reviews.entities);
  const dispatch = useDispatch();
  
  function handleAddReview(review){
    dispatch(reviewAdded(review));
  }
  const reviewsByRestaurant = reviewsList.filter((review) => review.restaurantId === restaurantId);
  
  return (
    <div>
      <ReviewInput restaurantId={restaurantId} onSubmitReview={handleAddReview}/>
      <Reviews reviews={reviewsByRestaurant}/>
    </div>
  );
}

export default ReviewsContainer;
