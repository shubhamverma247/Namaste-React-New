import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setshowIndex,
}) => {
  //   const [showItems, setshowItems] =
  //     useState(false);
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div className="bg-slate-100 w-6/12 mx-auto p-4  shadow-md my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="text-md font-bold px-1 mx-1">
            {data.title} (
            {data?.itemCards?.length})
          </span>
          <span className="px-1 mx-1">
            {showItems ? "🔼" : "🔽"}
          </span>
        </div>
        {showItems && (
          <ItemList items={data?.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
