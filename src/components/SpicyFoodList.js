import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]= useState("All")


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods((foodList)=>[...foodList, newFood])
  }
  
  function handleLiClick(id){
    
    const updatedItem = foods.filter(item=>item.id === id)
    const itemIndex = foods.indexOf(updatedItem[0])
    const updatedArray = [...foods]
    updatedArray[itemIndex].heatLevel++

    setFoods(updatedArray)
  }


  function handleFilterChange(){
    const foodsToDisplay = foods.filter((food) => {
      if (filterBy === "All") {
        return true;
      } else {
        return food.cuisine === filterBy;
      }
    })
    
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select onChange={handleFilterChange} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
