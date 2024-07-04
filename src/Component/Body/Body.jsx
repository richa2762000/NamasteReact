import Restaurant from "../Restaurant/Restaurant";
import "./Body.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // search
  const [searchInput, setSearchInput] = useState("");
  //  for API
  const [filterList, setFilterList] = useState([]);
  // we will make the cop of our original data for the filterRestaurant
  const [filterSearchRest, setFilterSearchRest] = useState([]);
  useEffect(() => {
    fetchData();
    console.log("rendered");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("hson", json);
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterSearchRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // top rated rest
  const topRatedRest = () => {
    const filterd = filterList.filter(
      (filterData) => filterData.info.avgRating > 4
    );
    setFilterSearchRest(filterd);
  };
  // filter the rest cards and update the UI
  const searchData = () => {
    const filterRest = filterList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterSearchRest(filterRest);
  };
  return filterList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* {console.log("return")} first jsx return then useEffect */}
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
            />
            <button className="search-cafe" onClick={searchData}>
              Search
            </button>
          </div>
          <div className="top-rated-rest">
            <button onClick={topRatedRest}>Top Rated Restaurants</button>
          </div>
        </div>
        <div className="res-container">
          {filterSearchRest.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <Restaurant resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
