import Swal from 'sweetalert2'

const AddItem = () => {
    const handleAddCraft = (e) => {
        e.preventDefault();
        // const {user} = useAuth() || {}
    
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const type = e.target.type.value;
        // const email = user.email;
         console.log(name, price, image, type)
         const newCraft = {name,price,image,type}
         console.log(newCraft);

         fetch('http://localhost:5000/craft',{
            method:'POST',
            headers: {
        "Content-type": "application/json"
            },
            body: JSON.stringify(newCraft)
        
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added success',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="gadgetContainer pt-10">
             <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
            <form onSubmit={handleAddCraft}>
                <div className="flex gap-8 ">
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                        />

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="craft"
                        >
                            Craft Item
                        </label>
                        <select
                            name="craft"
                            id="craft"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select craft"
                        >
                            <option value="painting" selected>
                                Painting
                            </option>
                            <option value="Sculpture" selected>
                               Sculpture
                            </option>
                            <option value="Textile Arts" selected>
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
                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Enter Image URL"
                            id="image"
                            name="image"
                        />
                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                            Type
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Enter type"
                            id="type"
                            name="type"
                        />

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
                    value="Add Item"
                />
            </form>
        </div>
        </div>
    );
};

export default AddItem;