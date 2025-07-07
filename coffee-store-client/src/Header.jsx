import { Link, Outlet } from "react-router-dom";
import bannerImg from "./assets/imge/Rectangle 2.png"

import coffeIcon1 from './assets/imge/1 1.png'
import coffeIcon2 from './assets/imge/2 1.png'
import coffeIcon3 from './assets/imge/3 1.png'
import coffeIcon4 from './assets/imge/4 1.png'
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import TopHeader from "./TopHeader";
const Header = () => {
    return (
        <div>
          <TopHeader></TopHeader>
            <div className="header-one grid grid-cols-2 min-h-[490px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div></div>
                <div className=" flex mx-auto text-white ">

                    <div className="flex  items-center ">
                        <div className="">
                            <h2 className=" text-[20px] md:text-[20px]">Would you like a Cup of Delicious Coffee?</h2>
                            <p className=" textarea-xs text-gray-300">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of  every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <p>
                                <Link to="/homerouter">
                                    <button className="text-yellow-400 underline text-sm">Learn More</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECEAE3] justify-items-center grid grid-cols-2 lg:grid-cols-4 ">
                <div className="py-3 px-4">
                    <img className=" h-[50px]" src={coffeIcon1} alt="" />
                    <h1 className="font-bold">Awesome Aroma</h1>
                    <p className="text-[10px]">You will definitely be a fan of the <br /> design & aroma of your coffee</p>
                </div>
                <div className="py-3 px-4">
                    <img className=" h-[50px]" src={coffeIcon2} alt="" />
                    <h1 className="font-bold">High Quality</h1>
                    <p className="text-[10px]">We served the coffee to you maintaining <br /> the best quality</p>
                </div>
                <div className="py-3 px-4">
                    <img className=" h-[50px]" src={coffeIcon3} alt="" />
                    <h1 className="font-bold">Pure Grades</h1>
                    <p className="text-[10px]">The coffee is made of the green coffee <br /> beans which you will love</p>
                </div>
                <div className="py-3 px-4">
                    <img className=" h-[50px]" src={coffeIcon4} alt="" />
                    <h1 className="font-bold">Proper Roasting</h1>
                    <p className="text-[10px]">Your coffee is brewed by first roasting <br /> the green coffee beans</p>
                </div>
            </div>

            <Outlet></Outlet>
           <FollowUs></FollowUs>
              <Footer></Footer>
            
        </div>
    );
};

export default Header;