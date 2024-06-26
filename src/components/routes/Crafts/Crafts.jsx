import { useLoaderData } from "react-router-dom";

const Crafts = () => {
    const craft = useLoaderData()
    // const {id}= useParams()
    // const craft = crafts.find(craft=> craft.id==id)
    const { _id, name, price, image, type } = craft
    return (
        <div className="mb-6 max-w-6xl mx-auto">
            <h3 className="text-3xl font-medium my-6">Arts & Craft Details</h3>
            <br />
            <h2 className="text-2xl">Name:{name}</h2>
            <br />
            <img src={image}alt="" />
            <br />
           
            <p>Type:{type}</p>
            <p>Details</p>
        </div>
    );
};

export default Crafts;