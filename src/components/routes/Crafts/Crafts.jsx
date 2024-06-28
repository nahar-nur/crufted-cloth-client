import { useLoaderData } from "react-router-dom";

const Crafts = () => {
    const craft = useLoaderData()
    // const {id}= useParams()
    // const craft = crafts.find(craft=> craft.id==id)
    const { name, price, image, category, subCategory, shortDescription, stockStatus,
        customization, procesingTime, rating, userName, userEmail} = craft
    return (
        <div className="mb-6 max-w-6xl mx-auto">
            <h3 className="text-3xl font-medium my-6">Arts & Craft Details</h3>
            <br />
            <h2 className="text-2xl">Name:{name}</h2>
            <br />
            <img src={image}alt="" />
            <br />
           
            <p>Category:{category}</p>
            <p>Type:{subCategory}</p>
            <p>Description:{shortDescription}</p>
            <h4>Avaiable Stock : {stockStatus}</h4>
            <h3>Customization : {customization}</h3>
            <p> Proceessing Time :{procesingTime}</p>
            <h3>Rating : {rating}</h3>
        </div>
    );
};

export default Crafts;