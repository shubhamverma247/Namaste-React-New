import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setresInfo] = useState(null)
    useEffect(()=>{ 
        fetchRestaurantMenu();
    },[])

    const fetchRestaurantMenu = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setresInfo(json.data);
    }

    return resInfo
}
export default useRestaurantMenu;