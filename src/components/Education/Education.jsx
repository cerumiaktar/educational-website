import { FaGraduationCap, FaBook } from "react-icons/fa";


const Education = () => {
    return (
        <div className="bg-[#F0EDF7] py-12">
            <div className="container mx-auto">
                <h1 className='text-2xl font-medium'>Welcome to Education</h1>
                <p>We are Expert in Education</p>
                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum ons ectetur elit. Vestibulum nec odios Suspe ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal ipsum dolor sit amet, cons ectetur elit.</p>
                <div className="flex items-center gap-8 mt-8">
                    <div className="flex items-center p-4 gap-4 border-t-4 border-t-amber-400 bg-white">
                        <span className="text-6xl"><FaGraduationCap /></span>
                        <div>
                            <h1 className="text-lg font-medium">Trending Courses</h1>
                            <p className="text-base text-[#666666]">Lorem ipsum dolor sit amet, cons ectetur ellt. Vestibulum nec </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-4 border-t-4 border-t-amber-400 bg-white">
                        <span className="text-6xl"><FaGraduationCap /></span>
                        <div>
                            <h1 className="text-lg font-medium">Online Courses</h1>
                            <p className="text-base text-[#666666]">Lorem ipsum dolor sit amet, cons ectetur ellt. Vestibulum nec </p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-4 border-t-4 border-t-amber-400 bg-white">
                        <span className="text-6xl"><FaGraduationCap /></span>
                        <div>
                            <h1 className="text-lg font-medium">Books & Library</h1>
                            <p className="text-base text-[#666666]">Lorem ipsum dolor sit amet, cons ectetur ellt. Vestibulum nec </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;