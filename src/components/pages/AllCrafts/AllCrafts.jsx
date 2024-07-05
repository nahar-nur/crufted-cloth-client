import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import AllCraftsRow from "./AllCraftsRow";

const AllCrafts = () => {
    const {user} = useContext(AuthContext)
    const [allCrafts, setAllCrafts]=useState([]);
    const url = `https://crufted-cloth-server.vercel.app/craft?email= ${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setAllCrafts(data))
    },[])
    return (
        <div>
            <div className=" mt-12 mb-12 mx-auto">
                <h2 className="text-3xl">All Art & Crafts Added By Users:{allCrafts.length}</h2>

            </div>
            <div className="w-max-6xl mx-auto mb-12">
                <table className="table table-zebra w -full">
                    {/* head */}
                    {/* <thead> */}
                        {/* <tr> */}
                            {/* <th></th> */}
                            {/* <th>Name</th> */}
                            {/* <th>Type</th> */}
                            {/* <th>Price</th> */}
                        {/* </tr> */}
                    {/* </thead> */}
                    <tbody>
                        {/* row 1 */}
                        {/* row 2 */}
                        {/* row 3 */}
                        {
                            allCrafts.map(craft=><AllCraftsRow key={craft._id} craft={craft}></AllCraftsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;