import { FaRegClock } from "react-icons/fa";

const Courses = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="mb-6">
                <h1 className='text-2xl font-medium'>Our Featured Courses</h1>
                <p className="text-[#666666] text-sm">Choose Your Courses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Product 1 */}
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/23rk1vF5/course5-1-1.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title">Sales Training: Practical Sales Techniques</h2>
                        <div className="flex items-center gap-2 text-[#333333]">
                            <span><FaRegClock /></span>
                            <p> 02h 20m</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src="https://i.ibb.co.com/TqT64ZhY/Ellipse-13.png" alt="" />
                            <p className="text-[#666666]">By templatation In Business, Design, Heath & Fitness, Sales</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-full">Enroll Courses</button>
                        </div>
                    </div>
                </div>
                {/* Product 2 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/934fNFcV/course10-1.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title">Complete Trello Fundamentals – Beginners to Advanced</h2>
                        <div className="flex items-center gap-2 text-[#333333]">
                            <span><FaRegClock /></span>
                            <p> 02h 20m</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src="https://i.ibb.co.com/TqT64ZhY/Ellipse-13.png" alt="" />
                            <p className="text-[#666666]">By templatation In Business, Design, Heath & Fitness, Sales</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-full">Enroll Courses</button>
                        </div>
                    </div>
                </div>
                {/* Product 3 */}
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/rrXpkJ7/1-0002-18-2.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-2">
                        <h2 className="card-title">Nutrition: Build Your Perfect Diet & Meal Plan</h2>
                        <div className="flex items-center gap-2 text-[#333333]">
                            <span><FaRegClock /></span>
                            <p> 02h 20m</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src="https://i.ibb.co.com/TqT64ZhY/Ellipse-13.png" alt="" />
                            <p className="text-[#666666]">By templatation In Business, Design, Heath & Fitness, Sales</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-outline w-full">Enroll Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;