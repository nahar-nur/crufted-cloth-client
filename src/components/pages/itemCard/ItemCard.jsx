import { Link } from "react-router-dom";

const ItemCard = ({craft}) => {
    const { _id, name, price, image, type } = craft
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>type{type}</p>
    <div className="card-actions justify-end">
        <Link to={`/crafts/${_id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemCard;