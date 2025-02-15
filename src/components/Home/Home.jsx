import React from 'react';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import Courses from '../Courses/Courses';
import Registration from '../Registration/Registration';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Courses></Courses>
            <Registration></Registration>
            <Review></Review>
        </div>
    );
};

export default Home;