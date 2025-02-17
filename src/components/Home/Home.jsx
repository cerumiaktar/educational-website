import React from 'react';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import Courses from '../Courses/Courses';
import Registration from '../Registration/Registration';
import Review from '../Review/Review';
import Teachers from '../Teachers/Teachers';
import NewsLetter from '../NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Courses></Courses>
            <Registration></Registration>
            <Review></Review>
            <Teachers></Teachers>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;