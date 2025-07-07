import { Link, useLoaderData } from "react-router-dom";
import TopHeader from "../TopHeader";
import Footer from "./Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Deatiles = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplie, tast, category, details, photo } = coffee;

    return (
        <div>
            <TopHeader></TopHeader>
            <div className="mx-auto flex justify-center">
                <div>
                    <Link to="/homeRouter"><span className="italic items-center  underline gap-2 flex text-blue-600"><FaLongArrowAltLeft /> Go Back Home </span></Link>
                </div>
            </div>
            <div >
                <div className="max-w-[500px] mx-auto">
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

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Deatiles;