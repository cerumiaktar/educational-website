import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaFlickr } from "react-icons/fa6";

const TopNavBar = () => {
    return (
        <div className="bg-[#042648] text-[#60ABF6] py-2">
            <div className="flex justify-end item-center gap-10 container mx-auto">
                <div className="flex items-center gap-2 text-xs">
                    <h2 className="border-r-1 pr-2">SignUp</h2>
                    <h1>SignIn</h1>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span><HiOutlineMail /></span>
                    <h2>example@gamil.com</h2>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span><MdCall /></span>
                    <h2>000-111-222</h2>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><TfiYoutube /></span>
                    <span><FaFlickr /></span>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;