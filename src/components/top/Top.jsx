import React from "react";
import "./top.css";

export default function Top() {
  return (
    <div className="topSearchBar">
      <select className="select"></select>

      <div className="midTop">
        <input
          type="search"
          className="searchInput"
          placeholder="ابحث عن عروض......."></input>
        <img src="../../../public/imgs/search.png" />
      </div>
      <select className="select">hgg</select>
    </div>
  );
}
