import { useState } from "react";
import items from "../data/items";
import Filter from "./Filter";
import Item from "./Item"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onChangeCategory() {
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory;
      }
  })   
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
          <Filter changeCategory={onChangeCategory}/>
      </div>
      <ul className="Items">
        {/* {itemsToDisplay.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
