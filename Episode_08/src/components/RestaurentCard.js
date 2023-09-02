import { CDN_URL } from "../utils/constants";// to import named export
const RestaunrentCard = (props) => {
    const {resData} = props;
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId,sla:{slaString}} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
             className="res-image"
             alt="res-logo" 
             src={CDN_URL+cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{slaString}</h5>
        </div>
    ) 
}

export default RestaunrentCard;
