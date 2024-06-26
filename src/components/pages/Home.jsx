
import { useLoaderData } from "react-router-dom";
import ItemCard from "./itemCard/ItemCard";


const Home = () => {
    const crafts = useLoaderData()
    return (
        <div className="m-20">
            <h3 className="text-3xl text-center font-semibold mb-16">Crafts Item </h3>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    crafts.map(craft=><ItemCard
                        key={craft._id}
                        craft={craft}>
                3</ItemCard>)
                }
            </div>
        </div>
    );
};

export default Home;