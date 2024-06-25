import Swal from "sweetalert2";

const CraftCard = ({ craft }) => {
    const { _id, name, price, image, type } = craft
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           fetch(`http://localhost:5000/craft/${_id}`,{
            method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if (data.deletedCount>0)
                   Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
           })
            }
          });

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{type}</p>
                    <p>{price}</p>

                    {/* <div className="card-actions justify-end"> */}
                    {/* <button className="btn btn-primary">View Details</button> */}
                    {/* </div> */}
                    <div className="join join-vertical lg:join-horizontal bg-[#FF497C]">
                        <button className="btn join-item bg-pink-300">View</button>
                        <button className="btn join-item bg-sky-400">Edit</button>
                        <button
                        onClick={()=>handleDelete(_id)}
                         className="btn join-item bg-yellow-300">Delete
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;