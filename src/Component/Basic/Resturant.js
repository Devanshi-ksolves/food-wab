import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard';
import Login from '../../login/Login';

const Resturant = () => {
  const[menuData, setMenuData]=useState(Menu);
 
  const filterItem=(category)=>{
    const updatedlist=Menu.filter((currEle)=>{
      return currEle.category===category
    });
    setMenuData(updatedlist);
  }
  
  
  

  return (
    <div>
      <nav className="navbar">
        <div className='btn-group'>
          <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
        

 
<Login/>
        </div>
      </nav>
        <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Resturant