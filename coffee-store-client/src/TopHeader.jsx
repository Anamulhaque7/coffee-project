import { NavLink } from 'react-router-dom';
import bannerTop from './assets/imge/bannertop.png'
import bannerTeeIcon from './assets/imge/logo1 1.png'
const TopHeader = () => {
    return (
        <div className=" w-full h-[90px] flex items-center justify-center" style={{ backgroundImage: `url(${bannerTop})` }}>
            <img src={bannerTeeIcon} alt="" />
            <p className="text-[30px] italic lg:text-[60px] text-white">Espresso Emporium</p>
            <div>
                <NavLink to="/singin" className="">Sing In</NavLink>
            </div>
        </div>
    );
};

export default TopHeader;