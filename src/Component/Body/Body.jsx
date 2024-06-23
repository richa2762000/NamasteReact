import Restaurant from "../Restaurant/Restaurant";
import "./Body.css";
import { useState } from "react";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search" value={searchInput}/>
        </div>
        <div className="res-container">
          <Restaurant />
        </div>
      </div>
    </>
  );
};
export default Body;
