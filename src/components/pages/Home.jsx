import { useLoaderData } from "react-router-dom";
import CraftCard from "../routes/craftCard/CraftCard";


const Home = () => {
    const crafts = useLoaderData()
    return (
        <div className="m-20">
            <h3 className="text-3xl text-center font-semibold mb-16">Crafts Itemgit </h3>
            <div className="grid md:grid-cols-2 gap-4">
            {
                crafts.map(craft=> <CraftCard
                
            key={craft._id}
            craft = {craft}
            ></CraftCard>)
            }
            </div>
        </div>
    );
};

export default Home;