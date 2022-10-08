import React from "react";

const Navbar = ({ filterItem, curList }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {/*  <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
          {curList.map((curEle) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curEle)}
              >
                {curEle}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
