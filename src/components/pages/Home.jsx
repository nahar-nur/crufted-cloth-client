
import { useLoaderData } from "react-router-dom";
import ItemCard from "./itemCard/ItemCard";
import Banner from "../pages/Banner/Banner";
import LatestCraft from "./LatestCraft/LatestCraft";
import { Tooltip } from 'react-tooltip';


const Home = () => {
    const crafts = useLoaderData()
    return (
        <div className="m-6">
            <LatestCraft></LatestCraft>
            <Banner></Banner>
            <div className="flex justify-center items-center gap-4">
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello Visitor!">
                    ◕‿‿◕
                </a>
                <h3 className="text-3xl text-center font-semibold mt-16 mb-16">Crafts Items </h3>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Have a nice welcome!">
                    ◕‿‿◕
                </a>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    crafts.map(craft => <ItemCard
                        key={craft._id}
                        craft={craft}>
                        3</ItemCard>)
                }
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Home;