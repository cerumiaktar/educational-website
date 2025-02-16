import { IoMdStar } from "react-icons/io";

const Review = () => {
    return (
        <div >
            <div className="container mx-auto flex justify-between gap-12 mt-14 mb-14">
                <div>
                    <div>
                        <h1 className="text-3xl font-bold">Our Core Values</h1>
                        <p>Short About Us</p>
                    </div>
                    <div className="collapse collapse-plus mt-6 bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-3xl font-bold">What Customer Says</h1>
                        <p>Short About Us</p>
                    </div>
                    <div className="card w-96 bg-base-100 mt-6 card-md border shadow-sm">
                        <div className="px-4 py-6">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-4">
                                    <img className="w-10" src="https://i.ibb.co.com/TqT64ZhY/Ellipse-13.png" alt="" />
                                    <div>
                                        <h2 className="card-title">Michile Jhon</h2>
                                        <p className="text-sm text-[#333333]">CEO</p>
                                    </div>
                                </div>
                                <div className=" flex items-center gap-2 text-[#FF8539]">
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                </div>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;