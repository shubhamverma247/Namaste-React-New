import { CDN_URL } from "../utils/constants";// to import named export
const RestaunrentCard = (props) => {
    const {resData} = props;
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId,sla:{slaString}} = resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
             className="res-logo"
             alt="res-logo" 
             src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    ) 
}

export default RestaunrentCard;
