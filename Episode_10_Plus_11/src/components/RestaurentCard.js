import { CDN_URL } from "../utils/constants"; // to import named export
const RestaunrentCard = (props) => {
  const { resData } = props;
  const {
    name,
    costForTwo,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla: { slaString },
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[200px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className=" rounded-lg h-[200px] "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

export const withPromotedLabel = (
  RestaunrentCard
) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p- m-3 rounded-sm text-sm">
          Promoted
        </label>
        <RestaunrentCard {...props} />
      </div>
    );
  };
};

export default RestaunrentCard;
