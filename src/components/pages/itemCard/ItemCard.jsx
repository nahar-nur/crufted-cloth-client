import { Link } from "react-router-dom";

const ItemCard = ({craft}) => {
    const {_id, name, price, image, category, subCategory, shortDescription, stockStatus,customization, procesingTime, rating, userName, userEmail} = craft
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>Type:{subCategory}</p>
    <h3>$ Price: {price}</h3>
    <p>Available : {stockStatus}</p>

    <div className=" ">
        <Link to={`/crafts/${_id}`}>
      <button className="btn btn-secondary w-full">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemCard;