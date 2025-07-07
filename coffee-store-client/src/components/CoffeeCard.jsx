import { FaPen } from "react-icons/fa";
import { MdDelete, MdOutlineVisibility } from "react-icons/md";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header";


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {

    const { _id, name, quantity, supplie, tast, category, details, photo } = coffee;

    const handelDelete = (_id) => {
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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const reaminige = coffees.filter(cof => cof._id !== _id);
                            setCoffees(reaminige);
                        }
                    })

            }
        });
    };


    return (
        <div className="w-11/12 mx-auto">
            <div className="card  card-side bg-[#F5F4F1] shadow-xl my-3">
                <figure>
                    <img
                        src={photo}
                        alt="" />
                </figure>
                <div className="card-body flex justify-between pr-4">
                    <div>
                        <h2 className="card-title">Name : {name}</h2>
                        <p>Available Quantity :  {quantity}</p>
                        <p>Supplier Name : {supplie}</p>
                        <p>Test :  {tast}</p>
                        <p>category :  {category}</p>
                        <p>Deatiels :  {details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group flex flex-col space-y-3 btn-group-vertical">
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-active"> 
                                    <MdOutlineVisibility /></button>
                            </Link>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn"><FaPen /></button>
                            </Link>
                            <button className="btn bg-red-600" onClick={() => handelDelete(_id)}><MdDelete className="text-white" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;