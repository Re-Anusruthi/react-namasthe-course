import Restaurant from "../src/Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "../src/Shimmer"

const Body = () => {
    let [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(() => {fetchData();},[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0037578&lng=76.3579401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        //? -> optional chaining in js
        setlistOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    };
   
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body-conainer">
    <div className="filter">
        <button className="toprated-btn" 
                onClick={() => {listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating < 4);
                               setlistOfRestaurants(listOfRestaurants);}
                        }>
                    
                    Top Rated Restaurants</button>
    </div>
    <div className="res-main">
    {listOfRestaurants.map(restaurant => <Restaurant key = {restaurant.info.id} resData = {restaurant}/>)}
   
    </div>
    </div>)
}

export default Body;