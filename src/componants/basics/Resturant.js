import React, { useState } from "react";
import "./index.css";
import Menucard from "./menuCard";
import Menu from "./menuapi";
import Navbar from "./Navbar";

/* spread operator  */
const uniqueCategory = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];
console.log(uniqueCategory);

const Resturant = () => {
  const [curData, setMenuData] = useState(Menu);
  const [curList, setMenuList] = useState(uniqueCategory);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <div>
      <Navbar filterItem={filterItem} curList={curList} />
      <Menucard curdata={curData} />
    </div>
  );
};

export default Resturant;
