import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({restaurantList}) {

  return (
  <ul>
    Restaurants Component
    {restaurantList.map((restaurant) => (
      <Restaurant key={restaurant.id} restaurant={restaurant}/>
    ))}
  </ul>
  );
}

export default Restaurants;
