import RestaunrentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    //local state variable given by react.whenevr it updated react rerender the componet
  
    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const [FilteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState("Type To Search");
    
    useEffect(()=>{
        fetchData()
        const timer = setInterval(()=>{
            console.log("class based component")
        },1000)
        // this will be called when leave this component or we can say when this component will be unmount.
        return ()=>{
clearInterval(timer)
            //to do some cleanup
        }
    },[]);//If you pass an empty array, it will only run once initially, and never again no matter how many times your component rerenders.

    const fetchData= async()=>{
        const data = await fetch(API_URL);
        const jsonData = await data?.json()
        
        //OPTIONAL CHAINING        
        // console.log(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setlistofRestaurants(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //Conditional rendering
    // if(listofRestaurants.length===0){
    //     return <Shimmer/>
    // }

    return listofRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input className="filter-txt" onChange={(e)=>{setsearchText(e.target.value)}} placeholder="Type To Search"></input>
                 <button onClick={()=>{
                    const filteredList = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    // setlistofRestaurants(filteredList); 
                    setFilteredRestaurant(filteredList)
                 }}>Search</button>
                </div>
                
                <button
                 className="filter-btn"
                 onClick={()=>{
                    const filteredList = listofRestaurants.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setlistofRestaurants(filteredList);
                    }}
                >
                Top Rated Restaunrants
                </button>
            </div>
            <div className="res-container">
               { 
               
               FilteredRestaurant.map((restaurent) => (
                <Link to={"/restaurants/"+restaurent.info.id} key={restaurent.info.id} ><RestaunrentCard  resData={restaurent} /></Link>
                
               ))
               }
                
            </div>
        </div>
    )
}

export default Body;