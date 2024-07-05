import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const craft = useLoaderData();
    const { _id,name, price, image, category, subCategory, shortDescription, stockStatus, customization,
        procesingTime, rating } = craft
    const handleUpdateCraft = (e) => {
        e.preventDefault();
        // const {user} = useAuth() || {}
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const category = e.target.category.value;
        const subCategory = e.target.subCategory.value;
        const shortDescription = e.target.shortDescription.value;
        const stockStatus = e.target.stockStatus.value;
        const customization = e.target.customization.value;
        const procesingTime = e.target.processingTime.value;
        const rating = e.target.rating.value;
    
        // const email = user.email;
        console.log(name, price, image, category, subCategory, shortDescription, stockStatus, customization, 
            procesingTime, rating)
            const upadateCraft = { name, price, image, category, subCategory, shortDescription, stockStatus, 
            customization, procesingTime, rating }
            console.log(upadateCraft);

         fetch(`https://crufted-cloth-server.vercel.app/craft/${_id}`,{
            method:'PUT',
            headers: {
        "Content-type": "application/json"
            },
            body: JSON.stringify(upadateCraft)
        
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft updadated successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="gadgetContainer pt-10 my-12">
            <h3 className="text-3xl mb-12git add m-0.5">Update Craft Item</h3>
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                <form onSubmit={handleUpdateCraft}>
                    <div className="flex gap-8 ">
                    <div className="flex-1">
                            {/* Cruft Item */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <select
                                name="name"
                                id="name"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Item"
                            >
                                <option value="Nakhshi Kantha" select>
                                    Nakhshi Kantha
                                </option>
                                <option value="Sweater" select>
                                    Sweater
                                </option>
                                <option value="Warm Comforter" select>
                                    Warm Comforter
                                </option>
                                <option value="Stone Cloth" select>
                                    Stone Cloth
                                </option>
                                <option value="Bedsheet" select>
                                    Bedsheet
                                </option>
                                <option value="Hanging Pot" select>
                                    Hanging Pot
                                </option>
                            </select>



                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Category"
                            >
                                <option value="painting" select>
                                    Painting
                                </option>
                                <option value="Sculpture" select>
                                    Sculpture
                                </option>
                                <option value="Textile Arts" select>
                                    Textile Arts
                                </option>
                            </select>

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Price
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                            />
                            {/* short description */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="shortDescription"
                            >
                                Short_description
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Short_description"
                                id="shortDescription"
                                name="shortDescription"
                            />
                            {/* short description 
                            1.Embroidery:
                             The art of decorating fabric or other materials using a needle to apply thread or yarn. Embroidery can include other materials such as pearls, beads, quills, and sequins. It is often used to add decorative elements toclothing, home décor, and accessories.
                             2.Knitting:
                              The craft of creating fabric by interlocking loops of yarn with knittingneedles. Knitting can produce various items, such as sweaters, scarves, socks, and blankets. It can be done by hand or with a knitting machine.
                              3.Quilting:
                              A sewing method in which two layers of fabric, with a layer of padding in between, are stitched together. Quilting can be used to make bed covers, wall hangings, clothing, and more. The stitches can be simple or intricate, forming patterns and designs.

                              4.Beadwork:
                              The art of attaching beads to one another or to fabric using techniques such as stringing, weaving, or embroidery. Beadwork is often used to create jewelry, decorative items, and embellishments on clothing and accessories.

                              5.Tie-Dyeing:
                              A method of dyeing fabric by tying it in various patterns to prevent the dye from reaching certain areas, resulting in unique, colorful patterns. This technique is popular for creating distinctive designs on t-shirts, dresses, and other textiles.
                              6.Macramae:
                               A form of textile-making using knotting rather than weaving or knitting. Macramé can be used to create plant hangers, wall hangings, jewelry, and other decorative items. It often involves using materials like cotton cord, hemp, or jute.
                            */}
                            
                            {/* customization */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="customization"
                            >
                                Customization
                            </label>
                            <select
                                name="customization"
                                id="customization"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Cumization"
                            >
                                <option value="Yes" select>
                                    Yes
                                </option>
                                <option value="No" select>
                                    No
                                </option>
                            </select>

                        </div>
                        {/* Right side */}
                        <div className="flex-1">

                            {/* image */}
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                name="image"
                            />
                            {/* Image Link:
                            https://i.postimg.cc/7hNQ8bt8/embroydery1.jpg
                            https://i.postimg.cc/KjbsHtND/knitting1.jpg
                            https://i.postimg.cc/yd4fD0wC/quilting1.jpg
                            https://i.postimg.cc/522DJqMP/beadwork1.jpg
                            https://i.postimg.cc/prkkc4yP/tiedye2.jpg
                            https://i.postimg.cc/vm6q802v/macrame2.jpg
                             */}

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="subCtegory"
                            >
                                Sub_Category
                            </label>
                            <select
                                name="subCategory"
                                id="subCategory"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select craft"
                            >
                                <option value="Embroidery" select>
                                    Embroidery
                                </option>
                                <option value="Knitting" select>
                                    Knitting
                                </option>
                                <option value="Quilting" select>
                                    Quilting
                                </option>
                                <option value="Beadwork" select>
                                    Beadwork
                                </option>
                                <option value="Tie-Dyeing" select>
                                    Tie-Dyeing
                                </option>
                                <option value="Macrame" select>
                                    Macrame
                                </option>
                            </select>


                            {/* stock status */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="stockStatus"
                            >
                                Stock_Status
                            </label>
                            <select
                                name="stockStatus"
                                id="stockStatus"
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Select Stock"
                            >
                                <option value="In Stock" select>
                                    In Stock
                                </option>
                                <option value="Made to Order" select>
                                    Made to Order
                                </option>
                            </select>


                            {/* processing Time */}
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="processingTime">
                                Procesing_Time
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter Processing Time"
                                id="processingTime"
                                name="processingTime"
                            />

                            {/* Rating */}
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="rating"
                            >
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                maxLength={5}
                                max={5}
                                min={0}
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />
                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Update Craft"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;