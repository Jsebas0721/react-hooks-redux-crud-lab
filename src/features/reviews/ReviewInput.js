import React, { useState } from "react";


function ReviewInput({onSubmitReview, restaurantId}) {

  const [ review, setReview ] = useState({
    comment: "",
    restaurantId: "",
  });

  function handleChange(e){
    setReview({
      ...review,
      comment: e.target.value,
      restaurantId: restaurantId
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    onSubmitReview(review)
    setReview({
      comment: "",
      restaurantId: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment 
        <textarea type="text" onChange={handleChange} value={review.comment}/>
        <input
        type="submit"
        value="Add Review"
        />
      </label>
    </form>
  
  );
}

export default ReviewInput;
