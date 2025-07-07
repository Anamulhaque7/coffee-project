import { Link, Outlet, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/coffeeCard";
import Header from "./Header";
import { useState } from "react";
import cooffeBackgroundImg from './assets/imge/4 2.png'
const HomeRouter = () => {
    const loadedCoffes = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffes)
    return (
        <div className="coffee-backgound" style={{backgroundImage: `url(${cooffeBackgroundImg})`}}>
           
            <div className="flex justify-between items-center">
                <div className="my-4 justify-items-center mx-auto ">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="font-bold text-[30px]">Our Popular Products</h1>
                    <Link to='/addCoffee'><button className="btn font-bold bg-[#E3B577]">Add Coffee</button></Link>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }

            </div>
        </div>
    );
};

export default HomeRouter;