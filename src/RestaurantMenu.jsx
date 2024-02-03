import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constant";

const RestaurantMenu = () => {
const [itemList, setItemList]=useState(null);

useEffect(()=>{fetchItem();},[]);

const {resid} = useParams();

const fetchItem=async ()=>{
 const data = await fetch(RES_URL+resid);
 const datajson=await data.json();
 console.log(datajson);
 setItemList(datajson?.data);
};

if(itemList===null ) return <Shimmer/>

const {name,areaName,avgRating,costForTwoMessage} = itemList?.cards[0]?.card?.card?.info;

const {itemCards} = itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{areaName}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4>Menu</h4>
            <ul>
                {itemCards.map((itemcard) => <li key={itemcard.card.info.id}>{itemcard.card.info.name}</li>)}
            </ul>
            
        </div>
    );
}

export default RestaurantMenu;