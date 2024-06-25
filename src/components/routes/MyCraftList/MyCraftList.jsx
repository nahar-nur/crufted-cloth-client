import CraftCard from "../craftCard/CraftCard";
import { useLoaderData } from "react-router-dom";


const MyCraftList = () => {
    const crafts = useLoaderData()
    return (
        <div className="mt-20">
            <h3 className="text-3xl text-center font-semibold mb-16">My Art & Craft List</h3>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    crafts.map(craft =>
                        <CraftCard
                            key={craft._id}
                            craft={craft}>

                        </CraftCard>)
                }
            </div>
        </div>
    );
};

export default MyCraftList;