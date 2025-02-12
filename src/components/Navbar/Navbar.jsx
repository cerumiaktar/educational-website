import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-[#05305A] shadow-sm">
            <div className="navbar container mx-auto text-white">
                <div className="flex-1">
                    <Link to='/'><img src="https://i.ibb.co.com/Y4NgY9B5/logo-4.png" alt="" /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Blog</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;