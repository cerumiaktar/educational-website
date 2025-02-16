

const Teachers = () => {
    return (
        <div className=" bg-[#F0EDF7] py-16 mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
                <div className="card bg-[#F8D24B] shadow-sm border">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/sdhpXg8w/teacher-3.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-medium">John Martin</h2>
                        <p className="text-base">Photography</p>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
                <div className="card bg-[#F8D24B] shadow-sm border">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/sJD2PBv3/teacher-1.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-medium">John Martin</h2>
                        <p className="text-base">Photography</p>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
                <div className="card bg-[#F8D24B] shadow-sm border">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/jPtBS9Mh/teacher-2.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-medium">John Martin</h2>
                        <p className="text-base">Photography</p>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
                <div className="card bg-[#F8D24B] shadow-sm border">
                    <figure>
                        <img className="w-full"
                            src="https://i.ibb.co.com/4nnDXYnL/teacher-4.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-medium">John Martin</h2>
                        <p className="text-base">Photography</p>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;