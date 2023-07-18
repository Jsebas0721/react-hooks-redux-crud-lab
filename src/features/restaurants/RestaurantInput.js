import React, { useState } from "react"

function RestaurantInput({ onSubmitRestaurant}) {
  const [name, setName] = useState("");

  function handleChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    onSubmitRestaurant(name)
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name 
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <input
      type="submit"
      value="Add Restaurant"
      />
    </form>
  );
}

export default RestaurantInput;
