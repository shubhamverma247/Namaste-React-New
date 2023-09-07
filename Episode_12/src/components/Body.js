import RestaunrentCard, {
  withPromotedLabel,
} from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable given by react.whenevr it updated react rerender the componet

  const [
    listofRestaurants,
    setlistofRestaurants,
  ] = useState([]);
  const [
    FilteredRestaurant,
    setFilteredRestaurant,
  ] = useState([]);
  const [searchText, setsearchText] = useState(
    "Type To Search"
  );

  const RestaunrentCardPromoted =
    withPromotedLabel(RestaunrentCard);

  useEffect(() => {
    fetchData();
    // const timer = setInterval(()=>{
    //     console.log("class based component")
    // },1000)
    // this will be called when leave this component or we can say when this component will be unmount.
    // return ()=>{

    //     clearInterval(timer)
    //     //to do some cleanup
    // }
  }, []); //If you pass an empty array, it will only run once initially, and never again no matter how many times your component rerenders.

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data?.json();
    console.log(jsonData);
    //OPTIONAL CHAINING
    // console.log(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setlistofRestaurants(
      jsonData?.data.cards[2]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data.cards[2]?.card?.card
        ?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering
  // if(listofRestaurants.length===0){
  //     return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are of line please check
        you internet connection.
      </h1>
    );

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search flex px-4 m-2">
          <input
            className="filter-txt border-gray-400 border rounded-md"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Type To Search"></input>
          <button
            className="px-2 py-1 mx-2 bg-teal-200 text-white rounded-md"
            onClick={() => {
              const filteredList =
                listofRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(
                      searchText.toLowerCase()
                    )
                );
              // setlistofRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}>
            Search
          </button>
          <button
            className="bg-blue-300 px-2 py-1 rounded-md text-white"
            onClick={() => {
              const filteredList =
                listofRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
              setlistofRestaurants(filteredList);
            }}>
            Top Rated Restaunrants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {FilteredRestaurant.map((restaurent) => (
          // use high order componet to add promote tag on restaurant card
          <Link
            to={
              "/restaurants/" + restaurent.info.id
            }
            key={restaurent.info.id}>
            {restaurent.info.veg ? (
              <RestaunrentCardPromoted
                resData={restaurent}
              />
            ) : (
              <RestaunrentCard
                resData={restaurent}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
