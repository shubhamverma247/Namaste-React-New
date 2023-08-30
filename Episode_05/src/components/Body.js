import RestaunrentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

    //local state variable given by react.whenevr it updated react rerender the componet
    const [listofRestaurants,setlistofRestaurants] = useState(resList);
    const [searchText,setsearchText] = useState("Type To Search");

    return (
        <div className="body">
            <div className="filter">
                <input
                 className="filter-txt"
                 onChange={(e)=>{setsearchText(e.target.value)}}
                 placeholder="Type To Search"></input>
                <button
                 className="filter-btn"
                 onClick={()=>{
                    
                    // const filteredList = listofRestaurants.filter(
                    //     (res)=> res.info.avgRating > 4
                    // );
                    const filteredList = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setlistofRestaurants(filteredList); 
                    
                }}>Top Rated Restaunrants</button>
            </div>
            <div className="res-container">
               { 
               listofRestaurants.map((restaurent) => (
                <RestaunrentCard key={restaurent.info.id} resData={restaurent} />
               ))
               }
                
            </div>
        </div>
    )
}

export default Body;