import Restaurant from "../src/Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "../src/Shimmer"

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchList, setSearchList] =useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {fetchData();},[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0037578&lng=76.3579401&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        //? -> optional chaining in js
        setlistOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
    //conditional rendering using ternary operator
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body-conainer">
    <div className="filter">
        <div className="search">
            <input 
             type="text" 
             className="search-input" 
             value={searchText} 
             onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button 
             className="search-btn" 
             onClick={()=>{                           
                           const searchListvalues = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                           setSearchList(searchListvalues);
                           }}>
                Search</button>
        </div>
        <button className="toprated-btn" 
                onClick={() => {const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                               setlistOfRestaurants(filteredList);}
                        }>
                    
                    Top Rated Restaurants</button>
    </div>
    <div className="res-main">
    {searchList.map(restaurant => <Restaurant key = {restaurant.info.id} resData = {restaurant}/>)}
   
    </div>
    </div>)
}

export default Body;