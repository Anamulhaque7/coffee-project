import tea1 from '../assets/imge/Rectangle 9.png'
import tea2 from '../assets/imge/Rectangle 10.png'
import tea3 from '../assets/imge/Rectangle 11.png'
import tea4 from '../assets/imge/Rectangle 12.png'
import tea5 from '../assets/imge/Rectangle 13.png'
import tea6 from '../assets/imge/Rectangle 14.png'
import tea7 from '../assets/imge/Rectangle 15.png'
import tea8 from '../assets/imge/Rectangle 16.png'
const FollowUs = () => {
    return (
        <div>
            <div className=" flex flex-col items-center pt-5">
                <p>Follow Us Now</p>
                <h1 className='text-[25px] mb-4'>Follow on Instagram</h1>
            </div>
            <div className='grid justify-items-center  px-3 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <img src={tea1} alt="" />
                <img src={tea2} alt="" />
                <img src={tea3} alt="" />
                <img src={tea4} alt="" />
                <img src={tea5} alt="" />
                <img src={tea6} alt="" />
                <img src={tea7} alt="" />
                <img src={tea8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;