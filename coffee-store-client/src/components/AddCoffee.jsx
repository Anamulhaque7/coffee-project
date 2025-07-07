import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from './Footer';
const AddCoffee = () => {

    const handelAddCoffee = (event) => {
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
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'User Added Sucessfuly',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div>
            <div className="w-[98%] bg-[#F4F3F0] mx-auto pb-6 px-3">
                <div className='flex justify-between items-center'>
                    <div></div>
                    <h1 className="text-red-800 text-center font-bold text-[30px] jus "><span>Add a Coffee</span> </h1>
                    <span className='italic underline text-blue-500 '><Link to="/" className=' flex items-center gap-1'>Go Back <FaLongArrowAltRight /></Link></span>
                </div>

                <p className="text-sm text-gray-500 text-center p-3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form action="" onSubmit={handelAddCoffee}>
                    <div className="">
                        <div className="form-control md:grid-cols-2 grid gap-4">
                            <div className="">
                                <label htmlFor="coffee">Name</label>
                                <br />
                                <input className="input w-full" type="text" name="name" id="" placeholder="Enter coffee name" />
                            </div>
                            <div>
                                <label htmlFor="quantity">Available Quantity</label>
                                <br />
                                <input className="input w-full" type="text" name="quantity" id="" placeholder="Available Quantity" />
                            </div>
                            <div>
                                <label htmlFor="supplier">Supplier Name</label>
                                <br />
                                <input className="input w-full" type="text" name="supplie" id="" placeholder="Enter coffee supplier" />
                            </div>
                            <div>
                                <label htmlFor="tast">Tast</label>
                                <br />
                                <input className="input w-full" type="text" id="" name="tast" placeholder="Enter coffee tast" />
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <br />
                                <input className="input w-full" type="text" name="category" id="" placeholder="Enter coffee category" />
                            </div>
                            <div>
                                <label htmlFor="details">Details</label>
                                <br />
                                <input className="input w-full" type="text" name="details" id="" placeholder="Enter coffee details" />
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="photo">Photo</label>
                            <br />
                            <input className="input w-full" type="text" name="photo" id="" placeholder="Enter photo URL" />
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee " className="btn btn-block my-3 font-bold" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;