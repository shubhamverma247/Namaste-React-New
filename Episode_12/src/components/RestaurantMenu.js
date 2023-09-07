import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo,setresInfo] = useState(null);
  const { resId } = useParams();

  //api calling logic implemented in this custom hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);
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
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { costForTwoMessage, cuisines, name } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[2]?.card?.card;
  //@ not accepted thats why we write like this
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">
        {name}
      </h1>
      <p className="font-bold text-xl">
        {" "}
        {cuisines.join(", ")} -{" "}
        {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={
            index === showIndex ? true : false
          }
          setshowIndex={() =>
            setshowIndex(
              showIndex === index ? -1 : index
            )
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
