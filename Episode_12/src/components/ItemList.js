import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left">
          <div className="py-2 flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span className="text-bold text-sm">
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info
                        .defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs">
                {item.card.info.description}
              </p>
            </div>

            <div className="w-2/12 p-4 ">
              <div className="absolute">
                <button className="text-sm  p-1 shadow-md text-white mx-6   rounded-sm bg-black">
                  Add +
                </button>
              </div>
              <img
                src={
                  CDN_URL + item.card.info.imageId
                }
                className="w-full"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
