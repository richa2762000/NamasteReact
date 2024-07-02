import { resList } from "../Json/resList";
import Restaurant from "../Restaurant/Restaurant";
import "./Body.css";
import { useState } from "react";

const Body = () => {
  // search
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  //button
  const [button, setButton] = useState("Top Rated Restaurants");

  // create filter emptyList for restaurant
  const [filterList, setFilterList] = useState(resList);
  const topRatedRest = () => {
    const filtered = resList.filter((res) => res.data.avgRating > 4);
    setFilterList(filtered);
    setButton("Remove Top Rated Resataurants");
  };

  return (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            value={searchInput}
          />
          <div className="top-rated-rest">
            <button onClick={topRatedRest}>{button}</button>
          </div>
        </div>
        <div className="res-container">
          {/* filter data */}
          {filterList.map((restaurant) => (
            <Restaurant key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
