import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";

const useRestaurantMenu = (resid) => {
    const [itemList, setItemList]=useState(null);
    useEffect(()=>{fetchItem();},[]);

    const fetchItem=async ()=>{
        const data = await fetch(RES_URL+resid);
        const datajson=await data.json();
        setItemList(datajson?.data);
       };

    return itemList;
}

export default useRestaurantMenu;