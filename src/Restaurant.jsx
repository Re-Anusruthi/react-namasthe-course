

const Restaurant = (props) => {
    const {resData} = props;

    const {
        name,
        cuisines,
        cloudinaryImageId,
        avgRatingString
    }= resData.info;
return(
    <div className="res-container">
        <div className="res-img">
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        </div>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>28 mins</h4>
    </div>)
}

export default Restaurant;