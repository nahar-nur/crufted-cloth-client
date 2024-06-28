import Marquee from "react-fast-marquee";

const LatestCraft = () => {
    return (
        <div className='flex mb-6'>
            <button className='btn btn-secondary'>Latest Craft</button>
            <Marquee className="pauseOnHover={true} speed={300}">
                Nakhi Kantha........, Stone Cloth......., Hanging Pot....
            </Marquee>
        </div>
    );
};

export default LatestCraft;