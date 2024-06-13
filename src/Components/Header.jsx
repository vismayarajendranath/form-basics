import React, { useState } from "react";

const Header = ({ searchTerm, searchHandler,setSearchTerm }) => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Contact Manager</h2>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          onKeyUp={()=>searchHandler()}
        />
      </div>
    </>
  );
};

export default Header;
