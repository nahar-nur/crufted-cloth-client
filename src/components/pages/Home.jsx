
import { useLoaderData } from "react-router-dom";
import ItemCard from "./itemCard/ItemCard";
import Banner from "../pages/Banner/Banner";
import LatestCraft from "./LatestCraft/LatestCraft";


const Home = () => {
    const crafts = useLoaderData()
    return (
        <div className="m-6">
            <LatestCraft></LatestCraft>
            <Banner></Banner>
            <h3 className="text-3xl text-center font-semibold mt-16 mb-16">Crafts Items </h3>
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