import Restaurant from "./Restaurant";
import './Body.css';
const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <Restaurant />
        </div>
      </div>
    </>
  );
};
export default Body;
