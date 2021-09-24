import { useState } from 'react'


function Filter(changeCategory) {
    return (
        <select name="filter" onChange={changeCategory}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option> 
        </select>
    )
}

export default Filter;
