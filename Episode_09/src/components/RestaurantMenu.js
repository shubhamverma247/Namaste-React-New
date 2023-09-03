import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =()=>{

    // const [resInfo,setresInfo] = useState(null);
    const {resId} = useParams();

    //api calling logic implemented in this custom hook
    const resInfo = useRestaurantMenu(resId);

    // useEffect(()=>{
    //   fetchMenu();  
    // },[])

    // const fetchMenu = async() =>{
    //     const data = await fetch(MENU_API+resId);

    //     const json = await data.json();
    //     // console.log(json.data)
    //     setresInfo(json.data); 
    // }

    // console.log(resInfo?.cards[0]?.card?.card?.info)
    if(resInfo===null) {return <Shimmer/>} ;

    const {costForTwoMessage,cuisines,name} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return  (
        
        <div className="menu">
            <h1>{name}</h1>
            <p> {cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100||item.card.info.defaultPrice
                    /100}</li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;