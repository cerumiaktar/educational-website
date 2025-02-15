

const Review = () => {
    return (
        <div >
            <div className="container mx-auto flex gap-12 mt-14">
                <div>
                    <div>
                        <h1 className="text-2xl">OUR CORE VALUES</h1>
                        <p>Short About Us</p>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
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
                        <h1 className="text-2xl">OUR CORE VALUES</h1>
                        <p>Short About Us</p>
                    </div>
                    <div className="card w-96 bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Medium Card</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;