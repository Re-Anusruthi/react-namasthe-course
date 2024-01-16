import Restaurant from "../src/Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    let [listOfRestaurants, setlistOfRestaurants] = useState(resObj);
    return(
    <div className="body-conainer">
    <div className="filter">
        <button className="toprated-btn" 
                onClick={() => {listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating < 4);
                               setlistOfRestaurants(listOfRestaurants);}
                        }>
                    
                    Top Rated Restaurants</button>
    </div>
    <div className="res-main">
    {listOfRestaurants.map(restaurant=><Restaurant key = {restaurant.info.id} resData = {restaurant}/>)}
   
    </div>
    </div>)
}

export default Body;