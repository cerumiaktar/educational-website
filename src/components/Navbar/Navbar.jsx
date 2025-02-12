import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="bg-[#05305A] shadow-sm">
            <div className="navbar container mx-auto text-white">
                <div className="flex-1">
                    <Link to='/'><img src="https://i.ibb.co.com/Y4NgY9B5/logo-4.png" alt="" /></Link>
                </div>
                <div className="flex-none mr-8">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="bg-[#042648] text-base rounded-t-none p-2">
                                    <li><a>About</a></li>
                                    <li><a>Courses</a></li>
                                    <li><a>Student Registration</a></li>
                                    <li><a>Instructor Registration</a></li>
                                    <li><a>Gallery</a></li>
                                    <li><a>Dashboard</a></li>
                                    <li><a>Teachers</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Membership</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div >
                    <span className="text-lg"><IoSearch /></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;