import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {

  const restaurantList = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();

  function handleAddRestaurant(restaurant){
    dispatch(restaurantAdded(restaurant))
  }
  return (
    <div>
      <RestaurantInput onSubmitRestaurant={handleAddRestaurant}/>
      <Restaurants restaurantList={restaurantList}/>
    </div>
  );
}

export default RestaurantsContainer;
