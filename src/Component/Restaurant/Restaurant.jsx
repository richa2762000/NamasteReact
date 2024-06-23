import { resList } from "../Json/resList";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <>
      {resList.map((list) => (
        <div className="rest-card" key={list.data.id}>
          <div className="rest-img">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                list.data.cloudinaryImageId
              }
              alt="loafing"
            ></img>
          </div>
          <div className="rest-details">
            <h4>{list.data.name}</h4>
            <h4>{list.data.avgRating} Star</h4>
            <h4>{list.data.cuisines.join(", ")}</h4>
            <h4>{list.data.costForTwo}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
export default Restaurant;
