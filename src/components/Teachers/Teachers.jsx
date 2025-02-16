

const Teachers = () => {
    return (
        <div className=" bg-[#F0EDF7] py-16 mb-14">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="stats shadow-xl text-center">
                        <div className="stat">
                            <div className="stat-value">12</div>
                            <div className="">Years of Experiences</div>
                        </div>
                    </div>
                    <div className="stats shadow-xl text-center">
                        <div className="stat">
                            <div className="stat-value">19</div>
                            <div className="">News Courses Every Years</div>
                        </div>
                    </div>
                    <div className="stats shadow-xl text-center">
                        <div className="stat">
                            <div className="stat-value">89</div>
                            <div className="">Registered students</div>
                        </div>
                    </div>
                    <div className="stats shadow-xl text-center">
                        <div className="stat">
                            <div className="stat-value">20</div>
                            <div className="">Total Teachers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;