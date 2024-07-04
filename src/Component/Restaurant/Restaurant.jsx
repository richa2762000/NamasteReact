import { cdnUrl } from "../Json/constant";
import "./Restaurant.css";

const Restaurant = (props) => {
  // destructring
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <>
      <div className="rest-card">
        <div className="rest-img">
          <img src={cdnUrl + cloudinaryImageId} alt="loafing"></img>
        </div>

        <div className="rest-details">
          <h4>{name}</h4>
          <h4>{avgRating} Star</h4>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </>
  );
};
export default Restaurant;
