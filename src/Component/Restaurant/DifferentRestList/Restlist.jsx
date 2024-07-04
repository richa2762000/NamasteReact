import { useEffect, useState } from "react";
import Shimmer from "../../Body/Shimmer";
import { useParams } from "react-router-dom";
import { menuApi } from "../../Json/constant";
const Restlist = () => {
  const [restMenu, setRestMenu] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);


  const fetchMenu = async () => {
    const data = await fetch(menuApi + resId);
    const json = await data.json();
    setRestMenu(json.data);
  };
  // const { name, cuisines, costForTwoMessage } = restMenu?.cards[2]?.card?.card?.info;
 console.log( restMenu)
  const { title, itemCards } =
    restMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return (
    <>
    Restlist
      <div className="menu">
        <h1>Name of the Rest: {restMenu?.cards[2]?.card?.card?.info.name}</h1>
        {/* <p>{name}</p>
        <p>{costForTwoMessage}</p>
        <h2>{cuisines.join(", ")}</h2> */}
        <div className="recommand">
          <h2>{title}</h2>
          {itemCards && itemCards.length > 0 ? (
            itemCards.map((item) => (
              <ul key={item?.card?.info?.id}>
                <li>
                  {item?.card?.info?.name} - price{" "}
                  {item?.card?.info?.price / 100}
                </li>
              </ul>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
        <div className="thali"></div>
      </div>
    </>
  );
};
export default Restlist;
