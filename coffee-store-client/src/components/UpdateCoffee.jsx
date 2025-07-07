import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import TopHeader from "../TopHeader";
import Footer from "./Footer";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplie, tast, category, details, photo } = coffee;

    const UpdatedCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplie = form.supplie.value;
        const tast = form.tast.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplie, tast, category, details, photo }
        // send Data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'User Updated Sucessfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            <TopHeader></TopHeader>
            <div>
                <div className="w-[98%] bg-[#F4F3F0] mx-auto pb-6 px-3">
                    <div className="flex justify-between">
                        <div></div>
                        <h1 className=" text-center font-bold text-[30px] ">Update a Coffee : <span className="text-black font-bold italic">{name}</span></h1>
                        <p className="text-blue-500 italic underline text-center">
                            <NavLink to='/homerouter'>Back to Home page</NavLink>
                        </p>
                    </div>
                    <p className="text-sm text-gray-500 text-center p-3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form action="" onSubmit={UpdatedCoffee}>
                        <div className="">
                            <div className="form-control md:grid-cols-2 grid gap-4">
                                <div className="">
                                    <label htmlFor="coffee">Name</label>
                                    <br />
                                    <input className="input w-full" type="text" name="name" id="" placeholder="Enter coffee name" defaultValue={name} />
                                </div>
                                <div>
                                    <label htmlFor="quantity">Available Quantity</label>
                                    <br />
                                    <input className="input w-full" type="text" name="quantity" id="" placeholder="Available Quantity" defaultValue={quantity} />
                                </div>
                                <div>
                                    <label htmlFor="supplier">Supplier Name</label>
                                    <br />
                                    <input className="input w-full" type="text" name="supplie" id="" placeholder="Enter coffee supplier" defaultValue={supplie} />
                                </div>
                                <div>
                                    <label htmlFor="tast">Tast</label>
                                    <br />
                                    <input className="input w-full" type="text" id="" name="tast" placeholder="Enter coffee tast" defaultValue={tast} />
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <br />
                                    <input className="input w-full" type="text" name="category" id="" placeholder="Enter coffee category" defaultValue={category} />
                                </div>
                                <div>
                                    <label htmlFor="details">Details</label>
                                    <br />
                                    <input className="input w-full" type="text" name="details" id="" placeholder="Enter coffee details" defaultValue={details} />
                                </div>
                            </div>
                            <div className="my-3">
                                <label htmlFor="photo">Photo</label>
                                <br />
                                <input className="input w-full" type="text" name="photo" id="" placeholder="Enter photo URL" defaultValue={photo} />
                            </div>
                        </div>
                        <input type="submit" value="Update Coffee" className="btn btn-block my-3 font-bold" />

                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default UpdateCoffee;